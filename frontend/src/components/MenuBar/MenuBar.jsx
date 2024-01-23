import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import MenuBarDetails from "./MenuBarDetails";
import { ClickAwayListener } from "@mui/material";

function MenuBar() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    // setOpen((prevOpen) => !prevOpen);
    setOpen(true);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const pages = [
    { name: "Insights", link: "/insights" },
    { name: "Industries", link: "/industries" },
    { name: "Services", link: "/services" },
    { name: "Client Stories", link: "/client-stories" },
    { name: "Careers", link: "/careers" },
    { name: "About us", link: "/about" },
  ];

  const insights = {
    links: [
      {
        name: "Business Performance",
        link: "/home/insights/business-performance",
      },
      {
        name: "Business Protection",
        link: "/home/insights/business-protection",
      },
      {
        name: "Digital adoption and transformation",
        link: "/home/insights/digital-adoption",
      },
      {
        name: "ESG and sustainability",
        link: "/home/insights/esg",
      },
      {
        name: "Regulatory changes",
        link: "/home/insights/regulatory-changes",
      },
    ],
    articles: [
      {
        name: "Business Performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-performance",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Business Protection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-protection",
        image: "https://picsum.photos/200/300",
      },
    ],
    main: {
      name: "Insights",
      link: "/insights",
    },
  };
  const [menuBarDetails, setMenuBarDetails] = React.useState(insights);

  const industries = {
    links: [
      {
        name: "Financial Services",
        link: "/home/industries/financial-services",
      },
      {
        name: "Consumer & Retail",
        link: "/home/industries/retail",
      },
      {
        name: "Infrastructure",
        link: "/industries",
      },
      {
        name: "Government",
        link: "/industries",
      },
      {
        name: "Healthcare",
        link: "/industries",
      },
      {
        name: "Energy, Natural Resources & Chemicals",
        link: "/industries",
      },
    ],
    articles: [
      {
        name: "Business Performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-performance",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Business Protection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-protection",
        image: "https://picsum.photos/200/300",
      },
    ],
    main: {
      name: "Industries",
      link: "/industries",
    },
  };

  const services = {
    links: [
      {
        name: "Audit & Assurance",
        link: "/home/services/audit-assurance",
      },
      {
        name: "Tax & Legal",
        link: "/home/services/tax-legal",
      },
      {
        name: "Advisory",
        link: "/home/services/advisory",
      },
      {
        name: "Private Enterprise",
        link: "/home/services/private-enterprise",
      },
      {
        name: "ESG",
        link: "/home/services/esg",
      },
    ],
    articles: [
      {
        name: "Business Performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-performance",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Business Protection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-protection",
        image: "https://picsum.photos/200/300",
      },
    ],
    main: {
      name: "Services",
      link: "/services",
    },
  };

  const clientStories = {
    links: [
      {
        name: "Business Performance",
        link: "/home/insights/business-performance",
      },
      {
        name: "Business Protection",
        link: "/home/insights/business-protection",
      },
      {
        name: "Digital adoption and transformation",
        link: "/home/insights/digital-adoption",
      },
      {
        name: "ESG and sustainability",
        link: "/insights",
      },
      {
        name: "Regulatory changes",
        link: "/home/insights/regulatory-changes",
      },
    ],
    articles: [
      {
        name: "Business Performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-performance",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Business Protection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-protection",
        image: "https://picsum.photos/200/300",
      },
    ],
    main: {
      name: "Client Stories",
      link: "/client-stories",
    },
  };

  const careers = {
    links: [
      {
        name: "Job Search",
        link: "/home/careers/job-search",
      },
      {
        name: "Who we are",
        link: "/home/careers/who-we-are",
      },
      {
        name: "What we do",
        link: "/home/careers/what-we-do",
      },
      {
        name: "Working at KPMG",
        link: "/home/careers/working-at-kpmg",
      },
    ],
    articles: [
      {
        name: "Business Performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-performance",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Business Protection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-protection",
        image: "https://picsum.photos/200/300",
      },
    ],
    main: {
      name: "Careers",
      link: "/careers",
    },
  };

  const about = {
    links: [
      {
        name: "Who we are",
        link: "/home/about/who-we-are",
      },
      {
        name: "What we stand for",
        link: "/home/about/what-we-stand-for",
      },
      {
        name: "Our role in the world",
        link: "/home/about/our-role-in-the-world",
      },
      {
        name: "Media",
        link: "/home/about/media",
      },
      {
        name: "Alliances",
        link: "/home/about/alliances",
      },
      {
        name: "KPMG Blog",
        link: "/home/about/kpmg-blog",
      },
    ],
    articles: [
      {
        name: "Business Performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-performance",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Business Protection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc accumsan",
        link: "/home/insights/business-protection",
        image: "https://picsum.photos/200/300",
      },
    ],
    main: {
      name: "About us",
      link: "/about",
    },
  };

  const settings = [
    {
      name: "Login / Register",
      func: () => {
        navigate("/auth");
      },
    },
    {
      name: "Learn More",
      func: () => {
        navigate("/");
      },
    },
    { name: "Logout", func: () => {} },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Success Passion
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      navigate(page.link);
                      handleCloseNavMenu();
                    }}
                    style={{
                      color: "#000000",
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Success Passion
            </Typography>
            <ClickAwayListener
              onClickAway={(event) => {
                setOpen(false);
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    // aria-controls={open ? "composition-menu" : undefined}
                    // aria-expanded={open ? "true" : undefined}
                    // aria-haspopup="true"
                    // onClick={handleToggle}
                    key={page}
                    onClick={() => {
                      if (page.name === "Insights") {
                        setMenuBarDetails(insights);
                      } else if (page.name === "Industries") {
                        setMenuBarDetails(industries);
                      } else if (page.name === "Services") {
                        setMenuBarDetails(services);
                      } else if (page.name === "Client Stories") {
                        setMenuBarDetails(clientStories);
                      } else if (page.name === "Careers") {
                        setMenuBarDetails(careers);
                      } else if (page.name === "About us") {
                        setMenuBarDetails(about);
                      } else {
                        setMenuBarDetails(insights);
                      }

                      if (page.name === menuBarDetails.main.name && open) {
                        setOpen(false);
                        return;
                      }
                      // handleToggle();

                      // navigate(page.link);
                      handleCloseNavMenu();
                      setOpen(true);
                    }}
                    sx={{ my: 2, color: "#000000", display: "block" }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </ClickAwayListener>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate("/auth");
                  }}
                  sx={{ p: 0 }}
                >
                  <SearchIcon
                    style={{
                      fontSize: "30px",
                      paddingLeft: "10px",
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  style={{
                    paddingLeft: "10px",
                  }}
                >
                  <PublicIcon
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      setting.func();
                    }}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <MenuBarDetails
        menuBarDetails={menuBarDetails}
        open={open}
        setOpen={setOpen}
        anchorRef={anchorRef}
        // main={{ name: "Insights", link: "/insights" }}
      />
    </>
  );
}
export default MenuBar;
