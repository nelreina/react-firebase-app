import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Pages/Landing'
import dashboard from './Pages/Dashboard';
import {AuthProvider} from './Auth.js'
import PrivateRoute from './PrivateRoute';
import Settings from './Pages/Settings';


const App = () => {
  
  return (
    <>
    <AuthProvider>
      <Router basename="/">
        <PrivateRoute exact path="/dashboard" component={dashboard} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/" component={Login} />
      </Router>
    </AuthProvider>
    </>  
  );
}

export default App;
