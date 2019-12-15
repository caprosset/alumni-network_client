import React, { Component } from 'react';
import userService from '../lib/user-service';

import AlumniCard from '../components/AlumniCard';

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
        <h1>All alumni</h1>
        <AlumniCard allAlumni={this.state.listOfAlumni} />
        { 
          <button onClick={ () => this.props.history.goBack()}>Go back</button>
        }
      </div>
    );
  }
}

export default ListAlumni;
