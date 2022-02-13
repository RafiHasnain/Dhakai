import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MessageLogo from "../assets/message.svg";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsLogo from "../assets/notification.svg";
import MoreIcon from "@material-ui/icons/MoreVert";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Logo from "../assets/Logo.svg";

import Home from "../assets/home.svg";
import search from "../assets/search.svg";
import Bag from "../assets/bag.svg";
import Dress from "../assets/dress.svg";
import Knitting from "../assets/knitting.svg";
import Cart from "../assets/cart.svg";
import Refresh from "../assets/refresh.svg";
import Settings from "../assets/settings.svg";
import Question from "../assets/question.svg";
import Quit from "../assets/quit.svg";
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 1),
  borderRadius: "20px",
  color: "Grey",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    color: "white",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(50),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    marginRight: "20vw",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, flexDirection: "row" }}>
      <div
        style={{
          position: "fixed",
          width: "4vw",
          height: "100vh",
          backgroundColor: "white",
        }}>
        <img src={Logo} alt='Logo' style={{ padding: "15px" }} />
        <div style={{ paddingTop: "15px", paddingLeft: "10px" }}>
          <img src={Home} alt='Logo' style={{ padding: "10px" }} />
          <img src={search} alt='Logo' style={{ padding: "10px" }} />
          <img src={Bag} alt='Logo' style={{ padding: "10px" }} />
          <img src={Dress} alt='Logo' style={{ padding: "10px" }} />
          <img src={Knitting} alt='Logo' style={{ padding: "10px" }} />
          <img src={Cart} alt='Logo' style={{ padding: "10px" }} />
          <img src={Refresh} alt='Logo' style={{ padding: "10px" }} />
        </div>
        <div style={{ paddingTop: "50px", paddingLeft: "15px" }}>
          <img src={Settings} alt='Logo' style={{ padding: "10px" }} />
          <img src={Question} alt='Logo' style={{ padding: "10px" }} />
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
            href='/log-in'>
            <img src={Quit} alt='Logo' style={{ padding: "0px" }} />
          </IconButton>
        </div>
      </div>
      <AppBar
        position='fixed'
        style={{
          backgroundColor: "#04896A",
          position: "fixed",
          top: "0px",
          left: "4vw",
          width: "96%",
        }}>
        <Toolbar>
          <ToggleButtonGroup
            size='small'
            // color='#04896A'
            value={alignment}
            exclusive
            onChange={handleChange}
            style={{
              backgroundColor: "#007459",
              borderRadius: "40px",
              padding: "5px",
            }}>
            <ToggleButton
              value='web'
              style={{
                color: "white",
                borderRadius: "40px",
                backgroundColor: "#04896A",
              }}>
              Explore
            </ToggleButton>
            <ToggleButton
              value='android'
              style={{
                color: "white",
                borderRadius: "40px",
                backgroundColor: "transperent",
                borderStyle: "none",
              }}>
              Activity
            </ToggleButton>
          </ToggleButtonGroup>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search by name, groups, types and others'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'>
              <Badge badgeContent={2} color='error'>
                <img src={MessageLogo} alt='Message Icon' />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'>
              <Badge badgeContent={6} color='error'>
                <img src={NotificationsLogo} alt='Notification Icon' />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'>
              <AccountCircle style={{ width: "45px", height: "40px" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#fff",
          position: "fixed",
          top: "65px",
          left: "4vw",
          zIndex: 3,
        }}>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "40px",
            backgroundColor: "#04896A",
          }}>
          All for you
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Recommended
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Top Manufactures
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Winter Special
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Danim Special
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Women's Wear
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Kids Wear
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          T-shirts
        </Button>
        <Button
          variant='contained'
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            color: "#2a2a2e",
          }}>
          Men's Fashion
        </Button>
      </div>
    </Box>
  );
}
