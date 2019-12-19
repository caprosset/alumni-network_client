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

    // check if job is saved by user
    userService.getOne(user._id) 
    .then((currentUser) => {
      // console.log('current user', currentUser);
      currentUser.savedJobs.forEach(savedJob => {
        if(savedJob._id === id) {
          this.setState({jobIsSaved: true});
        }
      })
    }).catch((err) => {
      // console.log(err);
    }); 

    // get the job offer
    jobService.getOne(id)
      .then((job)=>{
        this.setState({ job })
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  save = () => {
    const id = this.props.user._id;
    const jobId = this.props.match.params.id;
    // console.log('USER ID', id, 'JOB ID', jobId);

    userService.saveJob(id, jobId)
      .then( () => {
        this.setState({ jobIsSaved: true})
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  unsave = () => {
    const id = this.props.user._id;
    const jobId = this.props.match.params.id;
    // console.log('USER ID', id, 'JOB ID', jobId);

    userService.removeSavedJob(id, jobId)
    .then( () => {
      this.setState({ jobIsSaved: false})
    })
    .catch((err) => {
      // console.log(err);
    });
  }

  delete = () => {
    const id = this.props.match.params.id;
    jobService.delete(id)
    .then( () => this.props.history.push('/job'))
    .catch( (err) => {
      // console.log(err);
    });
  }

  formatDate = d => {
    let date = new Date(d)
    var dd = date.getDate(); 
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear(); 
    if(dd<10){dd='0'+dd} 
    if(mm<10){mm='0'+mm};
    return d = dd+'/'+mm+'/'+yyyy
  } 

  render() {
    const { user } = this.props; 
    const { title, companyName, image, city, bootcamp, description, jobOfferUrl, _id, created_at } = this.state.job;
    // console.log('this.state.job', this.state.job)
    // console.log('USER', user)
    // console.log('JOOOOB', this.state.job);
    // console.log(this.props);
    // console.log('DATE FORMAT', created_at)
    // console.log('DATE CONVERTED', this.formatDate(created_at))

    return (
      <div className="container">
        <section className="section">

          <TopNav />

          <div className="page-body">
            <div className="is-flex is-horizontal-center ">
              <figure className="image is-96x96">
                <img src={image} alt="Company logo" />
              </figure>
            </div>

            <div className="job-body has-text-centered">
              <h4 className="title is-4">{title}</h4>
              <h5 className="title is-5">{companyName}</h5>

              <div className="block has-text-left">
                <div className="is-flex event-info">
                  <div>
                    <p className="has-text-weight-bold">Location:</p>
                    <p className="has-text-weight-bold">Posted:</p>
                    <p className="has-text-weight-bold">For:</p>
                    <p className="has-text-weight-bold">Description:</p>
                  </div>
                  <div>
                    <p>&nbsp;&nbsp;&nbsp;{city}</p>
                    <p>&nbsp;&nbsp;&nbsp;{this.formatDate(created_at)}</p>
                    <p>&nbsp;&nbsp;&nbsp;{bootcamp}</p>
                    <p>&nbsp;&nbsp;&nbsp;{description}</p>
                  </div>
                </div>
                <button className="button is-link is-outlined is-fullwidth">
                  <a href={jobOfferUrl} target="_blank">Apply to the job</a>
                </button>
              
                {
                  // if user is admin, display 'Edit' and 'Delete' button; if not, display the 'Save' button
                  user.isAdmin
                  ? 
                    <div className="buttons bottom-buttons">
                      <Link to={`/job/edit/${_id}`}>
                        <button className="button is-info">Edit job</button>
                      </Link>
                      <button className="button is-danger" onClick={() => this.delete()}>Delete job</button>
                    </div>
                  :
                    this.state.jobIsSaved 
                    ?
                    <div className="buttons bottom-buttons">
                      <button className="button is-danger is-fullwidth" onClick={() => this.unsave()}>Unsave job</button>
                    </div>
                    : 
                    <div className="buttons bottom-buttons">
                      <button className="button is-success is-fullwidth" onClick={() => this.save()}>Save job</button>
                    </div>
                }
              </div>
            </div>
          </div>

          <BottomNav />
        </section>
      </div>
    )
  }
}

export default withAuth(ShowJob);