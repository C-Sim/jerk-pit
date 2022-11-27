import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import { PageTitle } from "../components/atoms/PageTitle";
import { AvatarBadge } from "../components/atoms/Avatar";

import review1 from "../components/atoms/images/Review1.jpg";
import review2 from "../components/atoms/images/Review2.jpg";
import review3 from "../components/atoms/images/Review3.jpg";
import review4 from "../components/atoms/images/Review4.png";

export const Reviews = () => {
  return (
    <Box m={8} align="center">
      <PageTitle title="Reviews" />

      <Typography sx={{ mt: 2, color: "#aeadad", fontWeight: 100 }}>
        We go the extra mile to make our customers as happy as possible. But
        don't just take our word for it...
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={3} align="center">
          <Box
            p={2}
            borderRadius="18px"
            bgcolor={"rgba(255, 255, 255, 0.2)"}
            height={480}
          >
            <Box m={2}>
              <img src={review1} alt="review1" className="review-image"></img>
            </Box>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", color: "#e30613" }}
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
          <Box
            p={2}
            borderRadius="18px"
            bgcolor={"rgba(255, 255, 255, 0.2)"}
            height={480}
          >
            <Box m={2}>
              <img src={review2} alt="review2" className="review-image"></img>
            </Box>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", color: "#e30613" }}
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
          <Box
            p={2}
            borderRadius="18px"
            bgcolor={"rgba(255, 255, 255, 0.2)"}
            height={480}
          >
            <Box m={2}>
              <img src={review3} alt="review3" className="review-image"></img>
            </Box>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", color: "#e30613" }}
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
          <Box
            p={2}
            borderRadius="18px"
            bgcolor={"rgba(255, 255, 255, 0.2)"}
            height={480}
          >
            <Box m={2}>
              <img src={review4} alt="review4" className="review-image"></img>
            </Box>
            <FormatQuoteIcon
              fontSize="large"
              sx={{ transform: "scaleX(-1)", color: "#e30613" }}
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
