import React, { useState, useEffect } from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import useStyles from "./styles";
import { logout } from "../../actions/auth";

import logo from "../../assets/Logo.png";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [scrollst, setScroll] = useState("top");

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

    let listner = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1) {
        if (scrollst !== "amir") {
          setScroll("amir");
        }
      } else {
        if (scrollst !== "top") {
          setScroll("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listner);
    };
  }, [location, scrollst]);

  return (
    <>
      <AppBar
        className={classes.appBar}
        position="fixed"
        color={scrollst === "top" ? "transparent" : "inherit"}
        elevation={scrollst === "top" ? 0 : 3}
      >
        <Link className={classes.brandContainer} to="/">
          <img className={classes.brandlogo} src={logo} alt="logo" />
        </Link>
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
                endIcon={<ExitToAppOutlinedIcon />}
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
              className={classes.login}
              endIcon={<LockOpenOutlinedIcon />}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
