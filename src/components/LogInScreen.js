// The LogIn Screen is a simple login form with two fields, a username and a password.
// Make sure that you use a type of password on the "password" input so that we cannot see which characters we are typing.
// On submit, the form should set a user cookie

import React from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { getCookies } from "../Utils"


const onLogin = (e) => {
  e.preventDefault()
  document.cookie = "loggedIn=true";
  document.cookie = "idk=false";
  window.location.replace("/listings")
}


class Login extends React.Component {

  componentDidMount = () => {
    const cookies = getCookies()
    const isLoggedIn = cookies.loggedIn && cookies.loggedIn === 'true'

    if (isLoggedIn) {
      document.cookie='loggedIn=false'
      window.location='/listings'
    }
  }

  render() {
    return (
      <div>
        <Container>
          <form onSubmit={onLogin}>
            <TextField name="username" label="Username" type="text"/>
            <br></br>
            <TextField name="password" label="Password" type="password"/>
            <br></br>
            <Button type="submit" variant="contained" color="primary">Login</Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default Login
