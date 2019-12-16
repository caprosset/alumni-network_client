import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import eventService from '../lib/event-service';
import userService from '../lib/user-service';
import { Link } from 'react-router-dom';

import BottomNav from '../components/BottomNav';


class ShowEvent extends Component {
  constructor(props){
    super(props);

    this.state = {
      event: {},
      eventIsSaved: false
    };		
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log('EVENT ID', id);

    const { user } = this.props;

    userService.getOne(user._id) 
    .then((currentUser) => {
      console.log('current user', currentUser);
      
      currentUser.savedEvents.forEach(savedEvent => {
        if(savedEvent._id === id) {
          console.log('HELLLOOOOO', user)
          this.setState({eventIsSaved: true});
        }
      })
    }).catch((err) => {
      console.log(err);
      
    });
    
    

    eventService.getOne(id)
      .then((event)=>{
        this.setState({ event })
      })
      .catch((err) => console.log(err));
  }

  save = () => {
    const id = this.props.user._id;
    const eventId = this.props.match.params.id;
    console.log('USER ID', id, 'EVENT ID', eventId);

    userService.saveEvent(id, eventId)
      .then( () => {
        this.setState({ eventIsSaved: true})
      })
      .catch((err) => console.log(err));
  }

  unsave = () => {
    const id = this.props.user._id;
    const eventId = this.props.match.params.id;
    console.log('USER ID', id, 'EVENT ID', eventId);

    userService.removeSavedEvent(id, eventId)
    .then( () => {
      this.setState({ eventIsSaved: false})
    })
    .catch((err) => console.log(err));
  }

  delete = () => {
    const id = this.props.match.params.id;
    eventService.delete(id)
    .then( () => this.props.history.push('/event'))
    .catch( (err) => console.log(err));
  }

  render() {
    const { user } = this.props; 
    console.log('EVENTTTT', this.state.event);

    return (
      <div>
        <div>
          <img src={this.state.event.image} alt="Event cover image"/>
        </div>
        <h2>{this.state.event.title}</h2>
        {/* <p>{this.state.event.attendingAlumni} are interested by this event</p> */}
        <div>
          <p>Location: {this.state.event.city}</p>
          <p>Date: {this.state.event.date}</p>
          <p>Recommended for: {this.state.event.bootcamp}</p>
        </div>
        <div>
          <p>About: {this.state.event.description}</p>
        </div>
        <div>
          <a href={this.state.event.eventOfferUrl} target="_blank">Register to the event</a>
        </div>
        {
          // if user is admin, display 'Edit' and 'Delete' button; if not, display the 'Save' button
          user.isAdmin
          ? 
            <div>
              <Link to={`/event/edit/${this.state.event._id}`}>
                <button>Edit event</button>
              </Link>
              <button onClick={() => this.delete()}>Delete event</button>
            </div>
          :
            this.state.eventIsSaved
            ?
            <div>
              <button onClick={() => this.unsave()}>Unsave event</button>
            </div>
            : 
            <div>
              <button onClick={() => this.save()}>Save event</button>
            </div>
        }
        <BottomNav />
      </div>
    )
  }
}



export default withAuth(ShowEvent);