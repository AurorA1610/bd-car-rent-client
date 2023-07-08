import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  user?.email ? console.log(user) : console.log("none");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#62B95E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration:'none', color:'white'}}>BANGLADESH CAR RENT</Link>
          </Typography>
          <Link to="/userServices">
            <Button color="success">Services</Button>
          </Link>
          {user?.email ? (
            <>
              <div style={{borderRadius: 5, background: 'green', padding: '5px 10px'}}>{user.displayName}</div>
              <Button color="success" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <NavLink to="/login">
              <Button color="success">Log in</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
