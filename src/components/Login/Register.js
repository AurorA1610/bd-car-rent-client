import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import bg from "../../images/user-login-bg.png";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { user, registerUser, isLoading, authError } = useAuth();
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    if (userLoginData.password1 !== userLoginData.password2) {
      alert("Passwords don't match");
      return;
    }
    registerUser(userLoginData.email, userLoginData.password1, userLoginData.name, navigate);
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
                sx={{ width: 1, my: 1 }}
                id="outlined-basic"
                label="Enter Name"
                color="success"
                variant="outlined"
                name="name"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: 1, my: 1 }}
                id="outlined-basic"
                label="Enter Phone Number"
                color="success"
                variant="outlined"
                name="phone"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: 1, my: 1 }}
                id="outlined-basic"
                label="Enter NID Number"
                color="success"
                variant="outlined"
                name="nid"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: 1, my: 1 }}
                id="outlined-basic"
                label="Enter Email"
                type="email"
                color="success"
                variant="outlined"
                name="email"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: 1, my: 1 }}
                id="outlined-basic"
                label="Enter Password"
                color="success"
                variant="outlined"
                type="password"
                name="password1"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: 1, my: 1 }}
                id="outlined-basic"
                label="Confirm Password"
                color="success"
                variant="outlined"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: 1, my: 1 }}
                variant="contained"
                color="success"
                type="submit"
              >
                Sign up
              </Button>
              <NavLink to="/login">
                <Button variant="text" color="success">
                  Log in
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress color="success" />}
          {user?.email && (
            <Alert severity="success">
              Congratulation! You've created your account.
            </Alert>
          )}
          {authError && (
            <Alert severity="error">Sign up failed! {authError}</Alert>
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

export default Register;
