import connect from "react-redux/es/connect/connect";
import {Redirect, Route} from "react-router-dom";
import React from "react";


const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        (authedUser !== undefined && authedUser !== null)
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
                }}
              />
    )} />
);

function mapStateToProps({ authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute);
