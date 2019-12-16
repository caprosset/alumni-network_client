import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Splash from './pages/Splash';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Navbar from './components/Navbar';
import TopNav from './components/TopNav';

import ListAlumni from './pages/ListAlumni';
import ShowAlumni from './pages/ShowAlumni';
import EditAlumni from './pages/EditAlumni';
import ListJobs from './pages/ListJobs';
import ShowJob from './pages/ShowJob';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import ListEvents from './pages/ListEvents';
import ShowEvent from './pages/ShowEvent';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';
import Dashboard from './pages/Dashboard';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <AnonRoute exact path="/" component={Splash} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/alumni" component={ListAlumni} />
          <PrivateRoute exact path="/alumni/edit/:id" component={EditAlumni} /> 
          <PrivateRoute exact path="/alumni/:id" component={ShowAlumni} /> 
          <PrivateRoute exact path="/job" component={ListJobs} />
          <PrivateRoute exact path="/job/create" component={CreateJob} /> 
          <PrivateRoute exact path="/job/edit/:id" component={EditJob} /> 
          <PrivateRoute exact path="/job/:id" component={ShowJob} /> 
          <PrivateRoute exact path="/event" component={ListEvents} />
          <PrivateRoute exact path="/event/create" component={CreateEvent} /> 
          <PrivateRoute exact path="/event/:id" component={ShowEvent} /> 
          <PrivateRoute exact path="/event/edit/:id" component={EditEvent} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
