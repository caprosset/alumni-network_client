import React, { Component } from 'react';
import userService from '../lib/user-service';
import cloudinaryService from '../lib/cloudinary-service';

import { withAuth } from '../lib/AuthProvider';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class EditAlumni extends Component {
  state = {
    // currentUser: false,
    firstName: '', 
    lastName: '',
    phone: '',
    image: '',
    currentCity: '',
    currentRole: '',
    currentCompany: '',
    linkedinUrl: '',
    githubUrl: '',
    mediumUrl: '',
    isAdmin: '',
    imageReady: true
  }

  componentDidMount() {
    userService.getOne(this.props.user._id)
      .then((user)=>{
        const { firstName, lastName, phone, image, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = user;

        this.setState({ firstName, lastName, phone, image, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleImageChange = event => {
    this.setState({ imageReady: false });

    const file = event.target.files[0];
    const imageFile = new FormData();

    imageFile.append('image', file);

    cloudinaryService.imageUpload(imageFile)
      .then(imageUrl => {
        this.setState({ image: imageUrl, imageReady: true });
      });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    const { firstName, lastName, phone, image, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = this.state;

    const { id } = this.props.user._id;
    const updatedUser = {  firstName, lastName, phone, image, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin };

    userService.updateOne(id, updatedUser)
    .then(() => {
        this.props.history.push(`/alumni/${id}`);
      })
    .catch(err => {
      console.log(err)
    });
  };



  render() {
    const { firstName, lastName, phone, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, isAdmin } = this.state;

    return (
      <div className="container">
        <section className="section">
          <TopNav />

          <div className="page-body">
            <h3 className="title is-3">Edit profile</h3>
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">

              <div className="field">
                <label className="label">Profile picture</label>
                <div className="control">
                  <input className="input" 
                    type="file"
                    name="image"
                    onChange={this.handleImageChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">First name *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Last name *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Phone"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
    
              <div className="field">
                <label className="label">Current city</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Current city"
                    type="text"
                    name="currentCity"
                    value={currentCity}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Current role</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Current role"
                    type="text"
                    name="currentRole"
                    value={currentRole}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Current company</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Current company"
                    type="text"
                    name="currentCompany"
                    value={currentCompany}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Your LinkedIn profile URL</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Linkedin url"
                    type="text"
                    name="linkedinUrl"
                    value={linkedinUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Your Github profile URL</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Github url"
                    type="text"
                    name="githubUrl"
                    value={githubUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Your Medium profile URL</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Medium url"
                    type="text"
                    name="mediumUrl"
                    value={mediumUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field" style={{'display': 'none'}}>
                <label className="label has-text-white">Is admin:</label>
                <div className="control">
                    <input className="input" 
                      type="text"
                      name="isAdmin"
                      value={isAdmin}
                      onChange={this.handleChange}
                    />
                </div>
              </div>

              <div className="buttons bottom-buttons">
                  <button type="submit" disabled={!this.state.imageReady} className="button is-link is-light">Save changes</button>
              </div>
 
            </form>
          </div>

          <BottomNav />
        </section>
      </div>
    )
  }
}


export default withAuth(EditAlumni);