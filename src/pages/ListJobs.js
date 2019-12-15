import React, { Component } from 'react';
import jobService from '../lib/job-service';

import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';

class ListJobs extends Component {
  state = {
    listOfJobs: []
  }

  componentDidMount() {
    jobService.getAll()
      .then((allJobs)=>{
        this.setState({ listOfJobs: allJobs })
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.listOfJobs);
    return (
      <div>
        <Navbar />
        <h1>All jobs</h1>
        <JobCard allJobs={this.state.listOfJobs} />
        { 
          <button onClick={ () => this.props.history.goBack()}>Go back</button>
        }
      </div>
    );
  }
}

export default ListJobs;
