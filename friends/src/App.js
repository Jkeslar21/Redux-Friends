import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendListView from './components/FriendListView';

const App = () => {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to='/api/login'>Friends List</Link>
            </li>
          </ul>
          <Route path='/api/login' component={Login} />
          <PrivateRoute exact path='/api/friends' component={FriendListView} />
        </div>
      </Router>
    );
}

export default App;
