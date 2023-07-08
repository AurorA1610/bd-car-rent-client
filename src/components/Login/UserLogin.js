import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Alert, Button, CircularProgress, Container, TextField } from "@mui/material";
import bg from "../../images/user-login-bg.png";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserLogin = () => {
  const { user, loginUser, isLoading, authError } = useAuth();
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    loginUser(userLoginData.email, userLoginData.password, navigate);
    e.preventDefault();
  };
  const [userLoginData, setUserLoginData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserLoginData = { ...userLoginData };
    newUserLoginData[field] = value;
    setUserLoginData(newUserLoginData);
  };
  const userLoginBg = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    paddingTop: 120,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    borderRadius: 10,
  };
  return (
    <Container sx={{ flexGrow: 1, mt: 4 }}>
      <Grid
        container
        spacing={{ xs: 0, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid style={userLoginBg} item xs={4} sm={4} md={5}>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: 1, my: 2 }}
                id="outlined-basic"
                label="Enter Email"
                type="email"
                color="success"
                variant="outlined"
                name="email"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: 1, my: 2 }}
                id="outlined-basic"
                label="Enter Password"
                color="success"
                variant="outlined"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: 1, my: 2 }}
                variant="contained"
                color="success"
                type="submit"
              >
                Log in
              </Button>
              <NavLink to="/register">
                <Button variant="text" color="success">
                  Create Account
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress color="success" />}
          {user?.email && (
            <Alert severity="success">
             You've logged in
            </Alert>
          )}
          {authError && (
            <Alert severity="error">Log in failed! {authError}</Alert>
          )}
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={7}
          style={{ paddingTop: 140, paddingRight: 16, paddingBottom: 16 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            commodi temporibus dolorum blanditiis nisi labore! Obcaecati quam
            rerum dolor at!
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserLogin;
