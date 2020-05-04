// Provide a form with which the logged-in user can enter data about a new small business and save it.
// Once saved, it should be added to the Redux store and should automatically be populated
// in the Listing table when you navigate back to that page.
// This "Add" page should be protected by a private route which means a user can't navigate 
// to it if they are not logged in.
// Also, it would be cool if you update the Google Map as you fill out the address field 
// so that the user gets a preview regarding the address. 
// You would do something like that using the componentDidUpdate functionality of a class component.

import React from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { Redirect } from "react-router";

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      isDone: false
    }
  }

  captureInput = (key, value) => {
    const listing = { ...this.state.listing };
    listing[key] = value;
    this.setState({
      listing
    })
  }

  onAddListing = (e) => {
    e.preventDefault();
    
    const { addListing } = this.props;
    addListing(this.state.listing);
    this.setState({
      isDone: true
    });
  }

  render() {
    if (this.state.isDone) {
      return <Redirect to="/listings" />
    }
  
    return (
      <div>
        <Container>
            <TextField name="Name" label="Name" type="text" onChange={(e) => this.captureInput('businessName', e.target.value)}/>
            <br></br>
            <TextField name="Address" label="Address" type="text" onChange={(e) => this.captureInput('address', e.target.value)}/>
            <br></br>
            <TextField name="Hours" label="Hours(ex. 8AM-9PM)" type="text" onChange={(e) => this.captureInput('operatingHours', e.target.value)}/>
            <br></br>
            <TextField name="Description" label="Description" type="text" onChange={(e) => this.captureInput('description', e.target.value)}/>
            <br></br>
            <Button type="submit" variant="contained" color="primary" onClick={this.onAddListing}>SAVE</Button>
        </Container>
      </div>
    )
  }
}

export default AddListing

