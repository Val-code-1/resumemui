import * as React from "react";
import { useRef, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./PersistentLeftDrawer.css";

import gsap from "gsap";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const themeP = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#482880",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#9e74e9",
    },
  },
});

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ pageContent }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const nameRef = useRef();
  useEffect(() => {
    gsap.from(nameRef.current, {
      duration: 1.0,
      ease: "power1.out",
      opacity: 0,
      x: 200,
      delay: 3.3,
    });
  }, []);

  return (
    <ThemeProvider theme={themeP}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" ref={nameRef}>
              Benjamin Reit
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link className="link" to="/">
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" id="homeLink" />
              </ListItem>
            </Link>
            <Link className="link" to="history">
              <ListItem button key="History">
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="History" id="historyLink" />
              </ListItem>
            </Link>
            <Link className="link" to="portfolio">
              <ListItem button key="Portfolio">
                <ListItemIcon>
                  <FolderSpecialIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio" id="portfolioLink" />
              </ListItem>
            </Link>
            <Link className="link" to="about">
              <ListItem button key="About">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="About" id="aboutLink" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link className="link" to="contact">
              <ListItem button key="Contact">
                <ListItemIcon>
                  <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" id="contactLink" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        {/* Alter the sx property to return on all pages here */}
        <Main open={open} sx={{ backgroundColor: "white" }}>
          <DrawerHeader />
          <Box sx={{ backgroundColor: "white" }}>{pageContent}</Box>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
