import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../atoms/images/Logo.png";

import { AvatarBadge } from "../atoms/Avatar";

export const Footer = ({ footerItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      component="footer"
      width="100vw"
      bottom={0}
      sx={{
        backgroundColor: "#000000",
        color: "#aeadad",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        m: 0,
        p: 2,
      }}
    >
      <Grid
        item
        xs={4}
        sm={3}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AvatarBadge image={logo} imageAlt="logo" />
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 100,
            pl: isMobile ? 1 : 2,
            fontSize: "0.6rem",
          }}
        >
          Cynthia's Jerk Pit <br />
          &copy; {new Date().getFullYear()}
        </Typography>
      </Grid>

      <Grid
        item
        xs={4}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", width: "100vw" }}>
          {footerItems.map((item) => (
            <IconButton
              sx={{
                textAlign: "center",
                color: "#c8c8c8",
                pl: 4,
                pr: 4,
              }}
              key={item.label}
              href={item.href}
              target="_blank"
              className="icon"
            >
              <item.icon />
            </IconButton>
          ))}
        </Box>
      </Grid>

      <Grid item xs={4} sm={3}>
        <Stack spacing={0.5}>
          <Typography
            sx={{
              fontSize: "0.6rem",
              textAlign: isMobile ? "left" : "right",
              fontWeight: 100,
            }}
          >
            Info@JerkPit.com
          </Typography>
          <Typography
            sx={{
              fontSize: "0.6rem",
              textAlign: isMobile ? "left" : "right",
              fontWeight: 100,
            }}
          >
            07777 777 777
          </Typography>
          <Typography
            sx={{
              fontSize: "0.6rem",
              textAlign: isMobile ? "left" : "right",
              fontWeight: 100,
            }}
          >
            Registered Company in England & Wales 12345678
          </Typography>
          <Typography
            sx={{
              fontSize: "0.6rem",
              textAlign: isMobile ? "left" : "right",
              fontWeight: 100,
            }}
          >
            123 Nelson St | Newtown | Birmingham | B1 1BB
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
