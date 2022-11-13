import { HashRouter as Router } from "react-router-dom";
import { Email, DeliveryDining, Instagram } from "@mui/icons-material";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/organisms/NavBar";
import { Footer } from "./components/organisms/Footer";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export const App = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Router>
      <Box
        sx={{
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100vw",
          background: `linear-gradient(
            to top,
            rgba(20, 20, 20, 0.2),
            rgba(255, 255, 255, 0.2)
          )`,
        }}
      >
        <NavBar
          navItems={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services & Fees",
              href: "/services",
            },
            {
              label: "Gallery",
              href: "/gallery",
            },
            {
              label: "FAQs",
              href: "/faqs",
            },
            {
              label: "Reviews",
              href: "/reviews",
            },

            {
              label: "Contact",
              href: "/contact",
            },
          ]}
        />
        <Box className="main" sx={{ marginTop: isMobile ? 6 : 8, padding: 0 }}>
          <AppRoutes />
        </Box>
        <Footer
          className="footer"
          footerItems={[
            {
              label: "eMail",
              icon: Email,
              href: "/#/contact",
            },
            {
              label: "order",
              icon: DeliveryDining,
              href: "https://deliveroo.co.uk/menu/birmingham/birmingham-city-centre/jerk-pit",
            },
            {
              label: "Instagram",
              icon: Instagram,
              href: "https://www.instagram.com/cynthias_jerkpit/",
            },
          ]}
        />
      </Box>
    </Router>
  );
};
