// The Details Screen should re-arrange the data that is presented in the listing table.
// It should present it in a user-friendly way and incorporate an outside API to go along with it.
// We will incorporate the Google Maps API for this.
// Reference the Google Maps API documentation for this but you will need a Google Cloud account.
// You should already have this from the JS311 course. I will provide more details about the Google Maps API below.

import React from 'react'

const DetailsScreen = (props) => {
console.log(props);
  const listingId = parseInt(props.match.params.id);
  let listingToShow;

  props.listings.forEach((listing) => {
    if (listing.id === listingId) {
      listingToShow = listing;
    }
  })

  if (!listingToShow) {
    return "No listing with id " + listingId; // TODO link back to the listings
  }

  return (
    <div>
      <div>
        <header>{listingToShow.businessName}</header>
        <p>{listingToShow.address}</p>
        <p>{listingToShow.operatingHours}</p>
        <p>{listingToShow.description}</p>
      </div>
    </div>
  )
}

export default DetailsScreen

