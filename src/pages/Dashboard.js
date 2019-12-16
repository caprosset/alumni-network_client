import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../lib/AuthProvider';
import userService from '../lib/user-service';

import SavedEventCard from '../components/SavedEventCard';
import SavedJobCard from '../components/SavedJobCard';
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class Dashboard extends Component {
  // state = {
  //   savedEvents: []
  // }

  // componentDidMount() {    
  //   const { userId } = this.props;
    
  //   userService.getOne(userId)
  //   .then((user) => {
  //     // console.log(user.savedEvents);
  //     const savedEvents = user.savedEvents
  //     this.setState({ savedEvents })
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  render() {
    const { user } = this.props;
    return (
      <div>
        <TopNav />
        <h1>My dashboard</h1>
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
              <div>
                <h2>Events you're interested in</h2>
                <SavedEventCard userId={user._id} />
              </div>
              <div>
                <h2>Jobs saved</h2>
                <SavedJobCard userId={user._id} />
              </div>
            </div>)
        }
        <BottomNav />
      </div>
    )
  }
}

export default withAuth(Dashboard);