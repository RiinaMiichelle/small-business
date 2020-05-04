// The listing screen should show a table of the small businesses you selected. Please list 4 or 5.
//  Try to take some data from real businesses in town or from another town of your choice.
//   At minium, the data that is required are:
// business name
// description
// address
// operating hours
// It is not a requirement that this table is paginated.
// You may do so if you like if you intend to add numerous businesses and you think it will degrade the user experience.

import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import {
  Link
} from 'react-router-dom';
import { getCookies } from "../Utils"


class ListingScreen extends React.Component  {
  constructor(props) {
    super(props);
  }

  onDelete = (listingId) => {
    const { deleteListing } = this.props;
    deleteListing(listingId);
  }

  render() {
  const cookies = getCookies()
  const isLoggedIn = cookies.loggedIn && cookies.loggedIn === 'true'
  
    return (
      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="right">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.listings.map((listing) => (
                <TableRow key={listing.id}>
                  <TableCell component="th" scope="row">
                    <Link to={`/listings/${listing.id}`}>
                      {listing.businessName}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{listing.description}</TableCell>
                  <TableCell align="right">{listing.operatingHours}</TableCell>
                  <TableCell align="right">{listing.address}</TableCell>
                    { isLoggedIn && (
                        <TableCell>
                          <IconButton aria-label="delete"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={() => this.onDelete(listing.id)}
                          >
                          <DeleteIcon>
                          </DeleteIcon>
                          </IconButton>
                        </TableCell>
                      )
                    }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export default ListingScreen