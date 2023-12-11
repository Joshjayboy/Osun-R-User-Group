import React from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = (props) => {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const navItems = [
    "Home",
    "About",
    "Agenda",
    "Facilitator",
    "Code of Conduct",
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ ml: 2, mt: 2 }}>
          {/* <img width="50px" alt="pic" src="./images/logo.png" /> */}
          <img
            width="50px"
            alt="pic"
            src="https://res.cloudinary.com/pro-solve/image/upload/v1702271104/osun_iapnes.jpg"
          />
        </Box>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button key={item} onClick={() => handleClick(item)}>
                <ListItemText primary={item} />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleClick = (item) => {
    console.log("it was clicked");

    if (item === "About") {
      navigate("/about");
    } else if (item === "Agenda") {
      navigate("/agenda");
    } else if (item === "Facilitator") {
      navigate("/facilitate");
    } else if (item === "Code of Conduct") {
      navigate("/code");
    } else if (item === "Home") {
      navigate("/");
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "transparent !important",
            boxShadow: "none",
            color: "#fff",
            transition: "all 0.3s ease-out !important",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.6) !important",
            },
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

            {/* test */}

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xl: "none", lg: "none", md: "none", sm: "none" },
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ ml: 12, mt: 2 }}>
                {/* <img width="50px" alt="pic" src="./images/logo.png" /> */}
                <img
                  width="50px"
                  alt="pic"
                  src="https://res.cloudinary.com/pro-solve/image/upload/v1702271104/osun_iapnes.jpg"
                />
              </Box>
            </Typography>
            {/* end of test */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Box sx={{ ml: 12, mt: 2 }}>
                {/* <img width="50px" alt="pic" src="./images/logo.png" /> */}
                <img
                  width="50px"
                  alt="pic"
                  src="https://res.cloudinary.com/pro-solve/image/upload/v1702271104/osun_iapnes.jpg"
                />
              </Box>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleClick(item)}
                  sx={{
                    mr: 3,
                    color: "#fff",
                    borderRadius: "30px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
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
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
