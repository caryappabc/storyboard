import React, { useState, useEffect } from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import useStyles from "./styles";
import logo from "../../logo.png";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const lgout = () => {
    dispatch(logout());
    history.push("/");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    //JWT ...
    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) lgout();
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location, user]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={logo} alt="logo" height="60" />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="left"
        >
          StoryBoard
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <div className={classes.user}>
              <Avatar
                className={classes.purple}
                alt={user.userData.name}
                src={user.userData.imageUrl}
              >
                {user.userData.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} varient="h6">
                {user.userData.name}
              </Typography>
            </div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.logout}
              onClick={lgout}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In / Sign Up
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
