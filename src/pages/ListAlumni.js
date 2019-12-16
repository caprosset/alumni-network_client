import React, { Component } from 'react';
import userService from '../lib/user-service';
import { withAuth } from '../lib/AuthProvider';

import AlumniCard from '../components/AlumniCard';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';

class ListAlumni extends Component {
  state = {
    listOfAlumni: []
  }

  componentDidMount() {
    userService.getAll()
      .then((allUsers)=>{
        this.setState({ listOfAlumni: allUsers })
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.listOfAlumni);
    return (
      <div>
        <TopNav />
        <Navbar />
        <h1>All alumni</h1>
        {
          this.state.listOfAlumni.map( (oneAlumni, index) => {
            return <AlumniCard key={index} {...oneAlumni} /> 
          })
				}
        <BottomNav />
      </div>
    );
  }
}

export default withAuth(ListAlumni);
