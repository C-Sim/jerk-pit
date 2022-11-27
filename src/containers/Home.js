import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import logo from "../components/atoms/images/Logo.png";
import platter from "../components/atoms/images/Platter.jpg";
import trailer1 from "../components/atoms/images/Trailer1.jpg";
import staffHut from "../components/atoms/images/StaffHut.png";
import trailerSt from "../components/atoms/images/TrailerSt.jpg";
import trailerBack from "../components/atoms/images/TrailerBack.jpg";
import trailerStand from "../components/atoms/images/TrailerStand.jpg";
import trailerParty from "../components/atoms/images/TrailerParty.jpg";

import { AvatarBadge } from "../components/atoms/Avatar";
import { PageTitle } from "../components/atoms/PageTitle";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";

import { NavLink } from "react-router-dom";

export const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box align="center">
      <Box
        mt={4}
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${platter})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box sx={{ mb: 4, width: "100vw", margin: 0 }}>
        <Box
          align="center"
          sx={{
            mt: isMobile ? 1 : 4,
            padding: 1,
          }}
        >
          <PageTitle title="About Us" />

          <Typography sx={{ m: 2, color: "#000000ff", fontWeight: 100 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={4} mt={2}>
          <img
            alt={"trailerBack"}
            src={trailerBack}
            width="80%"
            className="about-image"
          />
        </Grid>
        <Grid item xs={12} md={4} mt={2}>
          <img alt={"logo"} src={logo} width="80%" />
        </Grid>
        <Grid item xs={12} md={4} mt={2}>
          <img
            alt={"trailer1"}
            src={trailer1}
            width="80%"
            className="about-image"
          />
        </Grid>
      </Grid>

      <Box
        align="center"
        sx={{
          mt: 4,
          padding: 1,
        }}
      >
        <PageTitle title="Event Types" />
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={3} mt={2}>
          <figure className="event-figure">
            <img
              alt={"trailerStand"}
              src={trailerStand}
              width="100%"
              height="100%"
            />
            <figcaption
              className="image-bar"
              sx={{
                textAlign: "left",
                fontSize: "18px",
                fontWeight: 100,
                backgroundColor: "#1b1b1b",
              }}
            >
              Corporate
            </figcaption>
          </figure>
        </Grid>

        <Grid item xs={12} md={3} mt={2}>
          <figure className="event-figure">
            <img
              alt={"trailerParty"}
              src={trailerParty}
              width="100%"
              height="100%"
            />
            <figcaption
              className="image-bar"
              sx={{
                textAlign: "left",
                fontSize: "18px",
                fontWeight: 100,
                backgroundColor: "#1b1b1b",
              }}
            >
              Parties
            </figcaption>
          </figure>
        </Grid>

        <Grid item xs={12} md={3} mt={2}>
          <figure className="event-figure">
            <img alt={"trailerSt"} src={trailerSt} width="100%" height="100%" />
            <figcaption
              className="image-bar"
              sx={{
                textAlign: "left",
                fontSize: "18px",
                fontWeight: 100,
                backgroundColor: "#1b1b1b",
              }}
            >
              Public Events
            </figcaption>
          </figure>
        </Grid>

        <Grid item xs={12} md={3} mt={2}>
          <figure className="event-figure">
            <img alt={"staffHut"} src={staffHut} width="100%" height="100%" />
            <figcaption
              className="image-bar"
              sx={{
                textAlign: "left",
                fontSize: "18px",
                fontWeight: 100,
                backgroundColor: "#1b1b1b",
              }}
            >
              Weddings
            </figcaption>
          </figure>
        </Grid>
      </Grid>

      <Box>
        <Button
          href="/#/contact"
          className="button"
          variant="contained"
          sx={{
            fontWeight: 100,
            backgroundColor: "#1b1b1b",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#000000" },
            borderRadius: "18px",
            margin: 4,
            width: "42%",
            fontWeight: 400,
            fontFamily: "Burnaby",
            fontSize: 24,
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};
