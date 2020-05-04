    export const addListing = (newListing) => {
      return {
          type: 'ADD_LISTING',
          value: newListing
      }
  }

    export const deleteListing = (listingId) => {
      return {
        type: 'DELETE_LISTING',
        value: listingId
      }
    }
