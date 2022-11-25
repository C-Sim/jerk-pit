import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink } from "react-router-dom";
import logo from "../atoms/images/Logo.png";

export const NavBar = ({ navItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#000000ff",
      }}
    >
      <NavLink to={"/"}>
        <img src={logo} alt={"logo"} width="148px" className="logo" />
      </NavLink>
      <Divider />

      <nav
        className="nav"
        sx={{ display: { xs: "none", sm: "block" }, fontWeight: 100 }}
      >
        {navItems.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} component="header">
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#000000ff",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: "block",
              mr: isMobile ? "10%" : 0,
            }}
          >
            <NavLink to={"/"}>
              <img src={logo} alt={"logo"} width="148px" className="logo" />
            </NavLink>
          </Box>

          <Box
            className="nav"
            sx={{ display: isMobile ? "none" : "flex", fontWeight: 100 }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          anchor="top"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
