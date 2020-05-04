import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
// import Navigation from './components/Navigation'
import ListingScreen from './containers/ListingScreen'
import AddListingScreen from './containers/AddListingScreen'
import LogInScreen from './components/LogInScreen'
import DetailsScreen from './containers/DetailsScreen'
import { getCookies } from "../src/Utils"


const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = getCookies()
    return cookies.loggedIn && cookies.loggedIn === 'true'
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={null} />
            <Route exact path="/listings" component={ListingScreen} />
            <ProtectedRoute path="/addListing" component={AddListingScreen} />
            <Route path="/login" component={LogInScreen} /> 
            <Route path="/listings/:id" component={DetailsScreen} />
        </Switch>
    );
};

export default Router;