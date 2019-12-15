import React, { Component } from 'react';
import jobService from '../lib/job-service';


class EditJob extends Component {
  state= {
    title: '',
    description: '',
    companyName: '',
    companyLogo: '',
    bootcamp: 'Web Development',
    city: 'Barcelona',
    jobOfferUrl: '',
  }


  componentDidMount() {
    const { id } = this.props.match.params;

    jobService.getOne(id)
      .then((job)=>{
        console.log('JOB', job);
        const { companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl } = job;

        this.setState({ companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl })
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
    const { companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl } = this.state;
    
    // define user id and updatedUser (body) to pass to the update function
    const { id } = this.props.match.params;
    const updatedJob = { companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl };

    jobService.updateOne(id, updatedJob)
    .then(() => {
        this.props.history.push(`/job/${id}`);
      })
    .catch(err => console.log(err));
  };



  render() {
    const { companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl } = this.state;

    const { id } = this.props.match.params;
    // console.log('JOB ID', id)

    return (
      <div>
        <h1>Edit job post</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Company logo:</label>
          <input
            type="text"
            name="companyLogo"
            value={companyLogo}
            onChange={this.handleChange}
          />

          <label>Job title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <label>Company name:</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={this.handleChange}
          />

          <label>Location:</label>
          <select name="city" value={city} onChange={this.handleChange}>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Paris">Paris</option>
            <option value="Barcelona">Lisbon</option>
            <option value="Madrid">Amsterdam</option>
            <option value="Paris">Berlin</option>
            <option value="Barcelona">Miami</option>
            <option value="Madrid">Mexico City</option>
            <option value="Paris">Sao Paulo</option>
          </select>

          <label>Recommended for:</label>
          <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
            <option value="Web Development">Web Development</option>
            <option value="UX Design">UX Design</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <label>Job description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />

          <label>Job offer url:</label>
          <input
            type="text"
            name="jobOfferUrl"
            value={jobOfferUrl}
            onChange={this.handleChange}
          />

          <input type="submit" value="Save changes" />
        </form>
      </div>
    )
  }
}


export default EditJob;