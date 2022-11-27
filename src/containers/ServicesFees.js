import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CurrencyPoundSharpIcon from "@mui/icons-material/CurrencyPoundSharp";
import CreditCardSharpIcon from "@mui/icons-material/CreditCardSharp";
import SwapHorizSharpIcon from "@mui/icons-material/SwapHorizSharp";

import { PageTitle } from "../components/atoms/PageTitle";
import { AvatarBadge } from "../components/atoms/Avatar";

import staff from "../components/atoms/images/Staff.png";
import drinkTropical from "../components/atoms/images/DrinkTropical.jpg";
import mealMutton from "../components/atoms/images/MealMuttonPortrait.jpg";
import trailerPortrait from "../components/atoms/images/TrailerPortrait.png";

export const ServicesFees = () => {
  return (
    <Box m={8} align="center">
      <PageTitle title="Services & Fees" />

      <Typography sx={{ m: 4, color: "#aeadad", fontWeight: 100 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>

      <Grid container spacing={2} mt={2} mb={4}>
        <Grid item xs={12} md={3} align="center">
          <Box>
            <AvatarBadge></AvatarBadge>
            <Typography mt={2} fontWeight={100}>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box>
            <AvatarBadge></AvatarBadge>
            <Typography mt={2} fontWeight={100}>
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box>
            <AvatarBadge></AvatarBadge>
            <Typography mt={2} fontWeight={100}>
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box>
            <AvatarBadge></AvatarBadge>
            <Typography mt={2} fontWeight={100}>
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box width="100%" mb={4} p={4} bgcolor={"rgba(255, 255, 255, 0.1)"}>
        <PageTitle title="Fees" />

        <Grid container spacing={2} mt={2} mb={4}>
          <Grid item xs={12} md={4} align="center">
            <Box>
              <Typography fontSize={48} fontWeight={600} color="#aeadad">
                £1000
              </Typography>{" "}
              <Typography mt={2} fontWeight={100}>
                Basic package, including...
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} align="center">
            <Box>
              <Typography fontSize={48} fontWeight={600} color="#aeadad">
                £2000
              </Typography>{" "}
              <Typography mt={2} fontWeight={100}>
                Upgraded package, including...
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} align="center">
            <Box>
              <Typography fontSize={48} fontWeight={600} color="#aeadad">
                £3000
              </Typography>{" "}
              <Typography mt={2} fontWeight={100}>
                The full works, including...
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <PageTitle title="What's Included" />

      <Grid container spacing={2} mt={2} mb={4}>
        <Grid item xs={12} md={3} align="center">
          <Box>
            <img
              height={200}
              width={150}
              src={trailerPortrait}
              alt={"trailerPortrait"}
              className="included-image"
            ></img>{" "}
            <Typography mt={2} fontWeight={100}>
              Fancy trailer...
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box>
            <img
              height={200}
              width={150}
              src={mealMutton}
              alt={"mealMutton"}
              className="included-image"
            ></img>{" "}
            <Typography mt={2} fontWeight={100}>
              Delicious soul food...
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box>
            <img
              height={200}
              width={150}
              src={drinkTropical}
              alt={"drinkTropical"}
              className="included-image"
            ></img>{" "}
            <Typography mt={2} fontWeight={100}>
              Complementary drinks...
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} align="center">
          <Box>
            <img
              height={200}
              width={150}
              src={staff}
              alt={"staff"}
              className="included-image"
            ></img>{" "}
            <Typography mt={2} fontWeight={100}>
              Glamorous staff...
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box width="100%" p={4} bgcolor={"rgba(255, 255, 255, 0.1)"}>
        <PageTitle title="Payment Methods" />

        <Grid container spacing={2} mt={2} mb={4}>
          <Grid item xs={12} md={4} align="center">
            <Box>
              <CreditCardSharpIcon
                sx={{ fontSize: "64px", color: "#aeadad" }}
              />{" "}
              <Typography mt={2} fontWeight={100}>
                Credit/Debit Card
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} align="center">
            <Box>
              <CurrencyPoundSharpIcon
                sx={{ fontSize: "64px", color: "#aeadad" }}
              />{" "}
              <Typography mt={2} fontWeight={100}>
                Cash
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} align="center">
            <Box>
              <SwapHorizSharpIcon sx={{ fontSize: "64px", color: "#aeadad" }} />{" "}
              <Typography mt={2} fontWeight={100}>
                Bank Transfer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
