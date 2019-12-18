import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../lib/AuthProvider';
import userService from '../lib/user-service';

import SavedEventCard from '../components/SavedEventCard';
import SavedJobCard from '../components/SavedJobCard';
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class Dashboard extends Component {
  state = {
    savedEvents: [],
    savedJobs: []
  }

  componentDidMount() {    
    const { user } = this.props;
    console.log('USERRRRRR', user)
    
    userService.getOne(user._id)
    .then((user) => {
      // console.log(user.savedEvents);
      const savedEvents = user.savedEvents;
      console.log('SAVED EVVENTSSSS',savedEvents );
      
      const savedJobs = user.savedJobs;
      this.setState({ savedEvents, savedJobs })
    }).catch((err) => {
      console.log(err);
    });
  }

  unsaveEvent = (eventId) => {
    const { user } = this.props;
    // console.log('USER ID', userId, 'EVENT ID', eventId);

    userService.removeSavedEvent(user._id, eventId)
    .then((user) => {
      // console.log(user.savedEvents);
      const savedEvents = user.savedEvents
      this.setState({ savedEvents });
    })
    .catch((err) => console.log(err));
  }

  unsaveJob = (jobId) => {
    const { user } = this.props;
    // console.log('USER ID', userId, 'JOB ID', jobId);

    userService.removeSavedJob(user._id, jobId)
    .then((user) => {
      // console.log(user.savedJobs);
      const savedJobs = user.savedJobs
      this.setState({ savedJobs });
    })
    .catch((err) => console.log(err));
  }
  

  render() {
    console.log('this.state.savedEvents', this.state.savedEvents);
    console.log('this.state.savedJobs', this.state.savedJobs);

    const { user } = this.props;
    return (
      <div className="container">
        <section className="section">
          <TopNav />

          <div className="page-body">
            <h3 class="title is-3">My dashboard</h3>
            {
              user.isAdmin 
              ? (<div>
                  <Link to='/job/create'> 
                    <button>Publish a job offer</button>
                  </Link>
                  <Link to='/event/create'> 
                    <button>Publish an event</button>
                  </Link>
                </div>)
              : (<div>
                  <div className="saved-elements-section">
                    <h5 className="title is-5">Events you're interested in</h5>
                    {
                      this.state.savedEvents.map ( (oneEvent, index) => {
                        return ( <SavedEventCard 
                          key={index} 
                          {...oneEvent}
                          unsaveEvent={this.unsaveEvent} /> ) 
                      })
                    }
                  </div>
                  <div className="saved-elements-section">
                    <h5 className="title is-5">Jobs saved</h5>
                    {
                      this.state.savedJobs.map ( (oneJob, index) => {
                        return ( <SavedJobCard 
                          key={index} 
                          {...oneJob}
                          unsaveJob={this.unsaveJob} /> ) 
                      })
                    }
                  </div>
                
              </div>)
          }
          </div>

          <BottomNav />
    
        </section>
      </div>
    
    )
  }
}

export default withAuth(Dashboard);