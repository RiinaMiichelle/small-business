import { connect } from 'react-redux'
import ListingScreen from '../components/ListingScreen'

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(ListingScreen)