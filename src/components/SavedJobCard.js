import React, { Component } from 'react';
import userService from '../lib/user-service';
import { Link } from 'react-router-dom';


class SavedJobCard extends Component {
  state = {
    savedJobs: []
  }

  componentDidMount() {    
    const { userId } = this.props;
    
    userService.getOne(userId)
    .then((user) => {
      // console.log(user.savedJobs);
      const savedJobs = user.savedJobs
      this.setState({ savedJobs })
    }).catch((err) => {
      console.log(err);
    });
  }

  unsave = (jobId) => {
    const { userId } = this.props;
    console.log('USER ID', userId, 'JOB ID', jobId);

    userService.removeSavedJob(userId, jobId)
    .then((user) => {
      // console.log(user.savedJobs);
      const savedJobs = user.savedJobs
      this.setState({ savedJobs });
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {
          this.state.savedJobs.map (oneJob => {
            return (
              <div>
                <div>
                  <p>{oneJob.title}</p>
                </div>
                <div>
                  <p>{oneJob.companyName}</p>
                </div>
                <div>
                  <p>{oneJob.city}</p>
                </div>
                <div>
                  <Link to={`/job/${oneJob._id}`}>See</Link>
                  <button onClick={() => this.unsave(oneJob._id)}>Unsave job</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SavedJobCard;