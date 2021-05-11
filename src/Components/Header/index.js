import React, {useState} from "react";
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, TextField, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  navbar:{
    display: "flex",
    justifyContent:"space-around",
  },

  logo: {
    color:"white",
    textDecoration:"none",
    margin:"10px"
  
  },
  navitem: {
    color:"white"
  },

}));

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar color="primary">
      <Toolbar className={classes.navbar}>
        <Link to="/">
        <Typography className={classes.logo} variant="h6">
          IMDB
        </Typography>
        </Link>
        <Link to="/">
        <Typography className={classes.navitem} variant="h6">
          Home
        </Typography>
        </Link>
        <Link to="/watchlist">
        <Typography className={classes.navitem} variant="h6">
          Watchlist
        </Typography>
        </Link>
        <Link to="/toprated">
        <Typography className={classes.navitem} variant="h6">
          TopRated
        </Typography>
        </Link>
        <Link to="/signin">
        <Typography className={classes.navitem} variant="h6">
          Signin
        </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
