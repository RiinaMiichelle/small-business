import React from 'react'
import { Switch, Route } from 'react-router'
// import Navigation from './components/Navigation'
import ListingScreen from './containers/ListingScreen'
// import AddListingScreen from './containers/AddListingScreen'
import LogInScreen from './components/LogInScreen'
import DetailsScreen from './containers/DetailsScreen'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={null} />
            <Route exact path="/listings" component={ListingScreen} />
            {/* <Route path="/addListing" component={AddListingScreen} /> */}
            <Route path="/login" component={LogInScreen} /> 
            <Route path="/listings/:id" component={DetailsScreen} />
        </Switch>
    );
};

export default Router;