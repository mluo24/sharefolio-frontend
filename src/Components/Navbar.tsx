import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {lightBlue} from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {stringAvatar} from "../utils/functions";
import authSlice from "../store/slices/auth";

const pages = [
  {name: "Stories", url: "/stories"},
  {name: "Categories", url: "/categories"},
];
const loggedIn = [
  {name: "Profile", url: "/profile"},
  {name: "Stories", url: "#"},
  {name: "Create New", url: "#"},
  {name: "Liked Stories", url: "#"},
];

const Navbar = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    url: string
  ) => {
    navigate(url);
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    handleCloseNavMenu();
    handleCloseUserMenu();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{backgroundColor: lightBlue[100], color: "initial"}}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: "none", md: "flex"}}}
          >
            <Link href="/" color="inherit" underline="none">
              Sharefolio
            </Link>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
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
                display: {xs: "block", md: "none"},
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  key={i}
                  onClick={(event) => handleMenuItemClick(event, page.url)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {xs: "flex", md: "none"},
              justifyContent: {xs: "flex-end"},
            }}
          >
            Sharefolio
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex"},
              justifyContent: {md: "flex-end"},
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={i}
                href={page.url}
                sx={{my: 2, color: "initial", display: "block"}}
              >
                {page.name}
              </Button>
            ))}
            {!auth.account && (
              <Button
                href="/login"
                sx={{my: 2, color: "initial", display: "block"}}
              >
                Login
              </Button>
            )}
          </Box>
          {auth.account && (
            <Box sx={{flexGrow: 0, ml: 1}}>
              <Tooltip title="Open user menu">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <Avatar {...stringAvatar(auth.account.username)} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: "45px"}}
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
                transitionDuration={10}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {loggedIn.map((option) => (
                  <MenuItem
                    key={option.name}
                    onClick={(event) => handleMenuItemClick(event, option.url)}
                  >
                    <Typography textAlign="center">{option.name}</Typography>
                  </MenuItem>
                ))}
                <Divider/>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
