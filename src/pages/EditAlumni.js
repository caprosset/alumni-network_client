import React, { Component } from 'react';
import authService from '../lib/auth-service';
import userService from '../lib/user-service';


class EditAlumni extends Component {
  state= {
    currentUser: false,
    firstName: '', 
    lastName: '',
    phone: '',
    profilePicture: '',
    currentCity: '',
    currentRole: '',
    currentCompany: '',
    linkedinUrl: '',
    githubUrl: '',
    mediumUrl: '',
    isAdmin: ''
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
    const id = this.props.match.params.id;
    const updatedUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      profilePicture: this.state.profilePicture,
      currentCity: this.state.currentCity,
      currentRole: this.state.currentRole,
      currentCompany: this.state.currentCompany,
      linkedinUrl: this.state.linkedinUrl,
      githubUrl: this.state.githubUrl,
      mediumUrl: this.state.mediumUrl,
      isAdmin: this.state.isAdmin
    }
    userService.updateOne(id, updatedUser);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    userService.getOne(id)
      .then((user)=>{
        console.log('USEEEER', user);
        const { firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = user;

        this.setState({ firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin })
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
    return (
      <div>
        <h1>Edit profile</h1>
        { // if current user is on his profile, give access to edit form
        this.state.currentUser ?
        (<form onSubmit={this.handleFormSubmit}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <label>Phone:</label>
          <input 
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />

          <label>Profile picture:</label>
          <input 
            type="text"
            name="profilePicture"
            value={this.state.profilePicture}
            onChange={this.handleChange}
          />

          <label>Current city:</label>
          <input 
            type="text"
            name="currentCity"
            value={this.state.currentCity}
            onChange={this.handleChange}
          />

          <label>Current role:</label>
          <input 
            type="text"
            name="currentRole"
            value={this.state.currentRole}
            onChange={this.handleChange}
          />

          <label>Current company:</label>
          <input 
            type="text"
            name="currentCompany"
            value={this.state.currentCompany}
            onChange={this.handleChange}
          />

          <label>LinkedIn Url:</label>
          <input 
            type="text"
            name="linkedinUrl"
            value={this.state.linkedinUrl}
            onChange={this.handleChange}
          />
          
          <label>Github Url:</label>
          <input 
            type="text"
            name="githubUrl"
            value={this.state.githubUrl}
            onChange={this.handleChange}
          />

          <label>Medium Url:</label>
          <input 
            type="text"
            name="mediumUrl"
            value={this.state.mediumUrl}
            onChange={this.handleChange}
          />

          <label>Is admin</label>
          <input disabled
            type="text"
            name="isAdmin"
            value={this.state.isAdmin}
            onChange={this.handleChange}
          />

          <input type="submit" value="Save changes" />
        </form>)
      : <p>You don't have access to this page</p>
      }
      </div>
    )
  }
}


export default EditAlumni;