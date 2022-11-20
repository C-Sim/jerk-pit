import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import { PageTitle } from "../components/atoms/PageTitle";
import { AvatarBadge } from "../components/atoms/Avatar";

export const Reviews = () => {
  return (
    <Box m={8}>
      <PageTitle title="Reviews" />

      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={3} align="center">
          <Box p={2} borderRadius="18px" bgcolor={"rgba(255, 255, 255, 0.2)"}>
            <AvatarBadge></AvatarBadge>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", mt: 4, color: "#e30613" }}
            />
            <Typography fontWeight={100}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <FormatQuoteIcon fontSize="large" sx={{ color: "#e30613" }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box p={2} borderRadius="18px" bgcolor={"rgba(255, 255, 255, 0.2)"}>
            <AvatarBadge></AvatarBadge>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", mt: 4, color: "#e30613" }}
            />
            <Typography fontWeight={100}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <FormatQuoteIcon fontSize="large" sx={{ color: "#e30613" }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box p={2} borderRadius="18px" bgcolor={"rgba(255, 255, 255, 0.2)"}>
            <AvatarBadge></AvatarBadge>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", mt: 4, color: "#e30613" }}
            />
            <Typography fontWeight={100}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <FormatQuoteIcon fontSize="large" sx={{ color: "#e30613" }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box p={2} borderRadius="18px" bgcolor={"rgba(255, 255, 255, 0.2)"}>
            <AvatarBadge></AvatarBadge>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", mt: 4, color: "#e30613" }}
            />
            <Typography fontWeight={100}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <FormatQuoteIcon fontSize="large" sx={{ color: "#e30613" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
