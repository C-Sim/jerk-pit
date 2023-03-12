import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import useMediaQuery from "@mui/material/useMediaQuery";

export const PageTitle = ({ title }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        class="pageTitle"
        gutterBottom
        align="center"
        sx={{
          paddingTop: isMobile ? 4 : 0.8,
          color: "#ffffff",
          fontSize: 48,
          fontFamily: "Burnaby",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
