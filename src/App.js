import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ListAlumni from './pages/ListAlumni';
import ShowAlumni from './pages/ShowAlumni';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Alumni Network</h1>

        <Switch>
          <AnonRoute exact path="/" component={Splash} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/alumni" component={ListAlumni} />
          <PrivateRoute exact path="/alumni/:id" component={ShowAlumni} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
