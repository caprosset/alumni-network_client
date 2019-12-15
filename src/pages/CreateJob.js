import React, { Component } from 'react';
import jobService from '../lib/job-service';

class CreateJob extends Component {
  state = {
    title: '',
    description: '',
    companyName: '',
    companyLogo: '',
    bootcamp: 'Web Development',
    city: 'Barcelona',
    jobOfferUrl: '',
  }

  handleChange = event => {
    console.log('HELLO');

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    // get all the values from the state
    const { companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl } = this.state;

    const newJob = { title, description, companyName, companyLogo, bootcamp, city, jobOfferUrl }

    jobService
      .create(newJob)
      .then(job => {
        this.props.history.push(`/job/${job._id}`);
        // console.log('JOB CREATED', job);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { companyLogo, title, companyName, city, bootcamp, description, jobOfferUrl } = this.state;
    return (
      <div>
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
            <option value="Lisbon">Lisbon</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Berlin">Berlin</option>
            <option value="Miami">Miami</option>
            <option value="Mexico City">Mexico City</option>
            <option value="Sao Paulo">Sao Paulo</option>
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

          <input type="submit" value="Create job" />
        </form>
      </div>
    )
  }
}

export default CreateJob;