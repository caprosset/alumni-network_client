import React, { Component } from 'react';
import authService from '../lib/auth-service';
import userService from '../lib/user-service';
import { Link } from 'react-router-dom';

class ShowAlumni extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      currentUser: false
    };		
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    userService.getOne(id)
      .then((user)=>{
        this.setState({ user })
      })
      .catch((err) => console.log(err));
    
    authService.me()
    .then((currentUser)=>{
      // if user is the logged in/current user
      if(id === currentUser._id) {
        this.setState({ currentUser: true })
      }
    })
    .catch((err) => console.log(err));
  }


  render() {
    // console.log('USER ID', this.props.match.params.id);
    // console.log('CURRENT USER ID', this.state.currentUser._id)
    return (
      <div>
        <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
        <div>
          <a href={this.state.user.linkedinUrl} target="_blank">Linkedin</a>
          <a href={this.state.user.githubUrl} target="_blank">Github</a>
          <a href={this.state.user.mediumUrl} target="_blank">Medium</a>
        </div>
        <div>
          <p>Email: {this.state.user.email}</p>
          <p>Phone: {this.state.user.phone}</p>
          <p>Bootcamp: {this.state.user.bootcamp}</p>
          <p>Campus: {this.state.user.campus}</p>
          <p>Cohort: {this.state.user.cohort}</p>
          <p>Current city:{this.state.user.currentCity}</p>
          <p>Current role:{this.state.user.currentRole}</p>
        </div>
        {
          // if user is on his profile, display 'Edit' button
          this.state.currentUser
          ? 
            <Link to={`/alumni/edit/${this.state.currentUser._id}`}>
              <button>Edit profile</button>
            </Link>
          : null
        }
      
        { 
          <button onClick={ () => this.props.history.goBack()}>Go back</button>
        }
      </div>
    )
  }
}


export default ShowAlumni;