// The LogIn Screen is a simple login form with two fields, a username and a password.
// Make sure that you use a type of password on the "password" input so that we cannot see which characters we are typing.
// On submit, the form should set a user cookie and possibly store the user in the Redux state.
// That's up to you. 
// Once logged in, add a small bar below the navbar (it should exist on every page)
// that notifies the user they are logged in and shows their username.

import React from 'react'
import { Redirect } from 'react-router'
import { TextField, Button, Container } from '@material-ui/core'

const onLogin = (e) => {
  e.preventDefault()
  document.cookie = "max-age=60*1000";

  window.location.replace("/")
}


const Login = () => {

  return (
    <div>
      <Container>
        <form>
          <TextField name="username" label="Username" type="text" />
          <br></br>
          <TextField name="password" label="Password" type="password" />
          <br></br>
          <Button type="submit" variant="contained" color="primary" onSubmit={onLogin}>Login</Button>
        </form>
      </Container>
    </div>
  )
}

export default Login
