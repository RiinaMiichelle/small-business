import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import { getCookies } from "../Utils"

const Navigation = () => {
  const cookies = getCookies()
  const isLoggedIn = cookies.loggedIn && cookies.loggedIn === 'true'

  return (
    <div>
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Austin Small Business 
        </Typography>
        <Link to="/listings">
          <Button variant="contained" color="primary">Listings</Button>
        </Link>
        <Link to="/login">
          <Button variant="contained" color="primary">
            { isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Link>
        {
          isLoggedIn && (
            <Link to="/addListing">
              <Button variant="contained" color="primary">Add Listing</Button>
            </Link>
          )
        }
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navigation