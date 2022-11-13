import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import emailjs from "@emailjs/browser";

import { PageTitle } from "../components/atoms/PageTitle";

export const Contact = () => {
  const form = useRef();

  const [open, setOpen] = useState(false);

  const [emailError, setEmailError] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_doq4yxc",
        "template_3zqd709",
        form.current,
        "ulS302XN5UlvLfEvu"
      )
      .then(
        (result) => {
          handleOpenModal();
        },
        (error) => {
          setEmailError(true);
        }
      );
  };

  return (
    <Paper
      sx={{
        p: isMobile ? 2 : 3,
        m: 4,
        mt: isMobile ? 10 : 8,
        minWidth: isMobile ? "80%" : "90%",
        // background: `linear-gradient(
        //   to bottom,
        //   rgba(0, 0, 0, 0.4),
        //   rgba(174, 173, 173, 0.2)
        // )`,
      }}
      elevation={6}
    >
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Message sent.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thanks for getting in touch...we'll respond as soon as I can!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>OK</Button>
        </DialogActions>
      </Dialog>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          paddingTop: 0.8,
          color: "#1b1b1b",
          fontWeight: 100,
          fontSize: 32,
          // fontFamily: Burnaby,
        }}
      >
        Contact Us
      </Typography>

      <Typography
        align="center"
        sx={{ p: 3, pt: 1, fontWeight: 100, color: "#aeadad" }}
      >
        Send us a message using the form below and we'll respond as soon as we
        can.
      </Typography>

      <Divider />

      <Stack
        component="form"
        sx={{ p: 3 }}
        spacing={4}
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
      >
        <Stack spacing={2}>
          <TextField
            error={!!errors.from_name}
            label="Name"
            variant="outlined"
            helperText={!!errors.from_name ? "Please enter a valid name." : ""}
            {...register("from_name", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.reply_to}
            label="Email"
            type="email"
            variant="outlined"
            helperText={!!errors.reply_to ? "Please enter a valid email." : ""}
            {...register("reply_to", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.message}
            label="Message"
            aria-label="minimum height"
            multiline
            minRows={4}
            variant="outlined"
            helperText={!!errors.message ? "Please enter a valid message." : ""}
            {...register("message", {
              required: true,
            })}
          />
        </Stack>

        <Stack spacing={2}>
          <Button
            className="button"
            variant="contained"
            type="submit"
            sx={{
              fontWeight: 100,
              backgroundColor: "#000000ff",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#000000ff" },
            }}
          >
            Send Message
          </Button>

          {emailError && (
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "red" }}
              align="center"
            >
              Failed to send message. Please try again.
            </Typography>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};
