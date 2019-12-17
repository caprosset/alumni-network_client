import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

import userService from '../lib/user-service';
import jobService from '../lib/job-service';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


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

    const { user } = this.props;

    userService.getOne(user._id) 
    .then((currentUser) => {
      console.log('current user', currentUser);
      
      currentUser.savedJobs.forEach(savedJob => {
        if(savedJob._id === id) {
          // console.log('HELLLOOOOO', user)
          this.setState({jobIsSaved: true});
        }
      })
    }).catch((err) => {
      console.log(err);
    }); 

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
    const { title, companyName, image, city, bootcamp, description, jobOfferUrl, _id, created_at } = this.state.job;
    console.log('this.state.job', this.state.job)
    // console.log('USER', user)
    // console.log('JOOOOB', this.state.job);
    console.log(this.props);
    
    return (
      <div>
        <TopNav />
        <h2>{title}</h2>
        <h3>{companyName}</h3>
        <img src={image} alt="Company logo" width="250" height="200"/>
        <div>
          <p>Location: {city}</p>
          <p>Date of publication: {created_at}</p>
          <p>Recommended for: {bootcamp}</p>
          <p>Description: {description}</p>
        </div>
        <div>
          <a href={jobOfferUrl} target="_blank">Apply to job offer</a>
        </div>
        {
          // if user is admin, display 'Edit' and 'Delete' button; if not, display the 'Save' button
          user.isAdmin
          ? 
            <div>
              <Link to={`/job/edit/${_id}`}>
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
        <BottomNav />
      </div>
    )
  }
}

export default withAuth(ShowJob);