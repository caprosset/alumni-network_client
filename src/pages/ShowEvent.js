import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

import userService from '../lib/user-service';
import eventService from '../lib/event-service';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


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
          // console.log('HELLLOOOOO', user)
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
    const{ image, title, attendingAlumni, city, date, bootcamp, description, eventOfferUrl, _id } = this.state.event;
    // console.log('EVENTTTT', this.state.event);
    console.log('ATTENDING ALUMNI', attendingAlumni)
    console.log('this.state.event',this.state.event.attendingAlumni);
    

    return (
      <div>
        <TopNav />
        <div>
          <img src={image} alt="Event cover image" width="250" height="200"/>
        </div>
        <h2>{title}</h2>
          {
            this.state.event.attendingAlumni ?
            attendingAlumni.length  
            ? (<div>
                <p>Alumni attending this event</p>
                <ul>
                { attendingAlumni.map(alumni => {
                  return(<Link to={`/alumni/${alumni._id}`}>
                    <li key={alumni._id}>{alumni.firstName}</li>
                  </Link>)
                  })
                }
                </ul>
              </div>)
            : null
          : null
          }
        <div>
          <p>Location: {city}</p>
          <p>Date: {date}</p>

          <p>Recommended for: {bootcamp}</p>
        </div>
        <div>
          <p>About: {description}</p>
        </div>
        <div>
          <a href={eventOfferUrl} target="_blank">Register to the event</a>
        </div>
        {
          // if user is admin, display 'Edit' and 'Delete' button; if not, display the 'Save' button
          user.isAdmin
          ? 
            <div>
              <Link to={`/event/edit/${_id}`}>
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