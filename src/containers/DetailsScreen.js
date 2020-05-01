import { connect } from 'react-redux'
import DetailsScreen from '../components/DetailsScreen'

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(DetailsScreen)