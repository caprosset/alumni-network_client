import React, { Component } from 'react';
import jobService from '../lib/job-service';
import cloudinaryService from '../lib/cloudinary-service';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class EditJob extends Component {
  state= {
    title: '',
    description: '',
    companyName: '',
    image: '',
    bootcamp: 'Web Development',
    city: 'Barcelona',
    jobOfferUrl: '',
    imageReady: false
  }


  componentDidMount() {
    const { id } = this.props.match.params;

    jobService.getOne(id)
      .then((job)=>{
        console.log('JOB', job);
        const { image, title, companyName, city, bootcamp, description, jobOfferUrl } = job;

        this.setState({ image, title, companyName, city, bootcamp, description, jobOfferUrl })
      })
      .catch((err) => console.log(err));
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = event => {
    console.log('IMAGE', event.target.files[0]);

    const file = event.target.files[0];
    const imageFile = new FormData();

    imageFile.append('image', file);

    cloudinaryService.imageUpload(imageFile)
      .then(imageUrl => {
        console.log("the image ", imageUrl);
        this.setState({ image: imageUrl, imageReady: true });
        console.log('The image is the state', this.state.image);
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // get all the values from the state
    const { image, title, companyName, city, bootcamp, description, jobOfferUrl } = this.state;
    
    // define user id and updatedUser (body) to pass to the update function
    const { id } = this.props.match.params;
    const updatedJob = { image, title, companyName, city, bootcamp, description, jobOfferUrl };

    jobService.updateOne(id, updatedJob)
    .then(() => {
        this.props.history.push(`/job/${id}`);
      })
    .catch(err => console.log(err));
  };



  render() {
    const { image, title, companyName, city, bootcamp, description, jobOfferUrl } = this.state;

    // const { id } = this.props.match.params;
    // console.log('JOB ID', id)

    return (
      <div className="container">
      <section className="section">

        <TopNav />

        <div className="page-body">
          <h3 className="title is-3">Edit job post</h3>
          <form onSubmit={this.handleFormSubmit}  encType="multipart/form-data">
            
            <div className="field">
              <label className="label">Company logo</label>
              <div className="control">
                <input className="input" 
                  type="file"
                  name="image"
                  onChange={this.handleImageChange}
                />
              </div>
            </div>
            
            <div className="field">
              <label className="label">Job title *</label>
              <div className="control">
                <input className="input" 
                  placeholder="What is the title of the position?"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Company name *</label>
              <div className="control">
                <input className="input" 
                  placeholder="Name of the company"
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Location *</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select name="city" value={city} onChange={this.handleChange}>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Paris">Paris</option>
                    <option value="Lisbon">Lisbon</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Miami">Miami</option>
                    <option value="Mexico City">Mexico City</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                  </select> 
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Recommended for *</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
                    <option value="Web Development">Web Development</option>
                    <option value="UX Design">UX Design</option>
                    <option value="Data Analytics">Data Analytics</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Job description *</label>
              <div className="control">
                <input className="input" 
                  placeholder="Description"
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Job offer URL *</label>
              <div className="control">
                <input className="input" 
                  placeholder="Url of the job offer"
                  type="text"
                  name="jobOfferUrl"
                  value={jobOfferUrl}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="buttons bottom-buttons">
                <button type="submit" className="button is-link is-light">Edit Job</button>
            </div>
          </form>
        </div>

        <BottomNav />

      </section>
    </div>
    )
  }
}


export default EditJob;