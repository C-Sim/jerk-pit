import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import logo from "../components/atoms/images/Logo.png";
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
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${logo})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ImageListItemBar
          className="image-bar"
          subtitle="Photo taken on my travels in Kyoto, Japan"
          sx={{
            textAlign: "right",
            fontSize: "8px",
            fontWeight: 100,
            backgroundColor: "rgb(79, 99, 103, 0)",
            fontStyle: "italic",
          }}
        />
      </Box>
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
          <img alt={"logo"} src={logo} width="80%" className="aboutImage" />
        </Grid>
        <Grid item xs={12} md={4} mt={2}>
          <img alt={"logo"} src={logo} width="80%" className="aboutImage" />
        </Grid>
        <Grid item xs={12} md={4} mt={2}>
          <img alt={"logo"} src={logo} width="80%" className="aboutImage" />
        </Grid>
      </Grid>
    </Box>
  );
};
