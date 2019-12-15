import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import TopNav from './components/TopNav';

import ListAlumni from './pages/ListAlumni';
import ShowAlumni from './pages/ShowAlumni';
import EditAlumni from './pages/EditAlumni';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {/* {
          (this.props.match.path === '/alumni' || this.props.match.path === '/job' || this.props.match.path === '/event')
          ? <Navbar />
          : <TopNav />
        } */}
        
        <Switch>
          <AnonRoute exact path="/" component={Splash} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/alumni" component={ListAlumni} />
          <PrivateRoute exact path="/alumni/:id" component={ShowAlumni} /> 
          <PrivateRoute exact path="/alumni/edit/:id" component={EditAlumni} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
