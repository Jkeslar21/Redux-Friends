import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FriendListView from './FriendListView';

const PrivateRoute = ({...rest}) => {
  return (
      <Route 
        {...rest}
        render={props =>
        localStorage.getItem('token') ? (
            <FriendListView {...props} />
        ) : (
            <Redirect to='/api/login' />
        )}
      />
  );
};

export default PrivateRoute;