import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

import userService from '../lib/user-service';
import jobService from '../lib/job-service';


class ShowJob extends Component {
  constructor(props){
    super(props);

    this.state = {
      job: {},
      jobIsSaved: false,
    };		
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log('JOB ID', id);

    jobService.getOne(id)
      .then((job)=>{
        this.setState({ job })
      })
      .catch((err) => console.log(err));
  }

  save = () => {
    const id = this.props.user._id;
    const jobId = this.props.match.params.id;
    console.log('USER ID', id, 'JOB ID', jobId);

    userService.saveJob(id, jobId)
      .then( () => {
        this.setState({ jobIsSaved: true})
      })
      .catch((err) => console.log(err));
  }

  unsave = () => {
    const id = this.props.user._id;
    const jobId = this.props.match.params.id;
    console.log('USER ID', id, 'JOB ID', jobId);

    userService.removeSavedJob(id, jobId)
    .then( () => {
      this.setState({ jobIsSaved: false})
    })
    .catch((err) => console.log(err));
  }

  delete = () => {
    const id = this.props.match.params.id;
    jobService.delete(id)
    .then( () => this.props.history.push('/job'))
    .catch( (err) => console.log(err));
  }

  render() {
    const { user } = this.props; 
    console.log('USER', user)
    console.log('JOOOOB', this.state.job);
    return (
      <div>
        <h2>{this.state.job.title}</h2>
        <h3>{this.state.job.companyName}</h3>
        <img src={this.state.job.companyLogo} alt="Company logo"/>
        <div>
          <p>Location: {this.state.job.city}</p>
          <p>Date of publication</p>
          <p>Recommended for: {this.state.job.bootcamp}</p>
          <p>Description: {this.state.job.description}</p>
        </div>
        <div>
          <a href={this.state.job.jobOfferUrl} target="_blank">Apply to job offer</a>
        </div>
        {
          // if user is admin, display 'Edit' and 'Delete' button; if not, display the 'Save' button
          user.isAdmin
          ? 
            <div>
              <Link to={`/job/edit/${this.state.job._id}`}>
                <button>Edit job</button>
              </Link>
              <button onClick={() => this.delete()}>Delete job</button>
            </div>
          :
            this.state.jobIsSaved 
            ?
            <div>
              <button onClick={() => this.unsave()}>Unsave job</button>
            </div>
            : 
            <div>
              <button onClick={() => this.save()}>Save job</button>
            </div>
        }
      </div>
    )
  }
}

export default withAuth(ShowJob);