import { connect } from 'react-redux'
import AddListingScreen from '../components/AddListingScreen'
import { addListing } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (newListing) => dispatch(addListing(newListing)),
  }
}

export default connect(null, mapDispatchToProps)(AddListingScreen)