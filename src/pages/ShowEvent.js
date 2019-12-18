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
      <div className="container">
        <section className="section">

          <TopNav />

          <div className="page-body">
            <div className="is-flex is-horizontal-center ">
              <figure className="image is-fullwidth">
                <img src={image} alt="Event cover image" />
              </figure>
            </div>

            <div className="event-body has-text-centered">
              <h3 className="title is-3">{title}</h3>

              <div className="block has-text-left">
                {
                  this.state.event.attendingAlumni 
                  ?
                    attendingAlumni.length  
                    ? (<div>
                        <p>Some alumni attending this event:</p>
                        <ul className="alumni-attending">
                        { attendingAlumni.map( (alumni, index) => {
                            if(index <= 3) {
                              return(<Link to={`/alumni/${alumni._id}`}>
                                <li key={alumni._id}>{alumni.firstName}</li>
                              </Link>)
                            } 
                          })
                        }
                        </ul>
                      </div>)
                    : null
                  : null
                  }

                <div className="is-flex event-info">
                  <div>
                    <p>Location:</p>
                    <p>Date:</p>
                    <p>Recommended for:</p>
                    <p>About:</p>
                  </div>
                  <div>
                    <p>{city}</p>
                    <p>{date}</p>
                    <p>{bootcamp}</p>
                    <p>{description}</p>
                  </div>
                </div>
                <button className="button is-link is-outlined is-fullwidth">
                  <a href={eventOfferUrl} target="_blank">Read more about the event</a>
                </button>

                {
                // if user is admin, display 'Edit' and 'Delete' button; if not, display the 'Save' button
                user.isAdmin
                ? 
                  <div className="buttons bottom-buttons">
                    <Link to={`/event/edit/${_id}`}>
                      <button className="button is-info">Edit event</button>
                    </Link>
                    <button className="button is-danger" onClick={() => this.delete()}>Delete event</button>
                  </div>
                :
                  this.state.eventIsSaved
                  ?
                  <div className="buttons bottom-buttons">
                    <button className="button is-danger is-fullwidth" onClick={() => this.unsave()}>Unsave event</button>
                  </div>
                  : 
                  <div className="buttons bottom-buttons">
                    <button className="button is-success is-fullwidth" onClick={() => this.save()}>Save event</button>
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



export default withAuth(ShowEvent);