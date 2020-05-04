import { connect } from 'react-redux'
import ListingScreen from '../components/ListingScreen'
import { deleteListing } from  '../redux/actions'

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (listingId) => dispatch(deleteListing(listingId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen)