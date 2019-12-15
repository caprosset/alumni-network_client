import React, { Component } from 'react';
import userService from '../lib/user-service';
import { Link } from 'react-router-dom';


class SavedEventCard extends Component {
  state = {
    savedEvents: []
  }

  componentDidMount() {    
    const { userId } = this.props;
    
    userService.getOne(userId)
    .then((user) => {
      // console.log(user.savedEvents);
      const savedEvents = user.savedEvents
      this.setState({ savedEvents })
    }).catch((err) => {
      console.log(err);
    });
  }

  unsave = (eventId) => {
    const { userId } = this.props;
    console.log('USER ID', userId, 'EVENT ID', eventId);

    userService.removeSavedEvent(userId, eventId)
    .then((user) => {
      // console.log(user.savedEvents);
      const savedEvents = user.savedEvents
      this.setState({ savedEvents });
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {
          this.state.savedEvents.map (oneEvent => {
            return (
              <div>
                <div>
                  <p>{oneEvent.date}</p>
                </div>
                <div>
                  <p>{oneEvent.city}</p>
                </div>
                <div>
                  <p>{oneEvent.title}</p>
                </div>
                <div>
                  <Link to={`/event/${oneEvent._id}`}>See</Link>
                  <button onClick={() => this.unsave(oneEvent._id)}>Unsave event</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SavedEventCard;