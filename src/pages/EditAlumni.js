import React, { Component } from 'react';
import userService from '../lib/user-service';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class EditAlumni extends Component {
  state = {
    // currentUser: false,
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

  componentDidMount() {
    const { id } = this.props.match.params;

    userService.getOne(id)
      .then((user)=>{
        console.log('USEEEER', user);
        const { firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = user;

        this.setState({ firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin })
      })
      .catch((err) => console.log(err));
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    // get all the values from the state
    const { firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = this.state;
    
    // define user id and updatedUser (body) to pass to the update function
    const { id } = this.props.match.params;
    const updatedUser = {  firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin };

    userService.updateOne(id, updatedUser)
    .then(() => {
        this.props.history.push(`/alumni/${id}`);
      })
    .catch(err => console.log(err));
  };



  render() {
    const { firstName, lastName, phone, profilePicture, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = this.state;

    // const { user } = this.props;
    // console.log('USER ID', user._id)
    // const { id } = this.props.match.params;
    // console.log('PROFILE ID', id)

    return (
      <div>
        <TopNav />
        <h1>Edit profile</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />

          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label>Phone:</label>
          <input 
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />

          <label>Profile picture:</label>
          <input 
            type="text"
            name="profilePicture"
            value={profilePicture}
            onChange={this.handleChange}
          />

          <label>Current city:</label>
          <input 
            type="text"
            name="currentCity"
            value={currentCity}
            onChange={this.handleChange}
          />

          <label>Current role:</label>
          <input 
            type="text"
            name="currentRole"
            value={currentRole}
            onChange={this.handleChange}
          />

          <label>Current company:</label>
          <input 
            type="text"
            name="currentCompany"
            value={currentCompany}
            onChange={this.handleChange}
          />

          <label>LinkedIn Url:</label>
          <input 
            type="text"
            name="linkedinUrl"
            value={linkedinUrl}
            onChange={this.handleChange}
          />
          
          <label>Github Url:</label>
          <input 
            type="text"
            name="githubUrl"
            value={githubUrl}
            onChange={this.handleChange}
          />

          <label>Medium Url:</label>
          <input 
            type="text"
            name="mediumUrl"
            value={mediumUrl}
            onChange={this.handleChange}
          />

          <div style={{display: 'none'}}>
            <label>Is admin</label>
            <input disabled
              type="text"
              name="isAdmin"
              value={isAdmin}
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="Save changes" />
        </form>
        <BottomNav />
      </div>
    )
  }
}


export default EditAlumni;