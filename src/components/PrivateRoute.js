import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

function PrivateRoute({ component: Component, isLoggedin, isLoading, ...rest }) {

  if (isLoading) {
    return <h1>Loading</h1>
  }
  else {
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedin ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default withAuth(PrivateRoute);
