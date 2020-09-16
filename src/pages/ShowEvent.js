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

    const { user } = this.props;

    userService.getOne(user._id) 
    .then((currentUser) => {      
      currentUser.savedEvents.forEach(savedEvent => {
        if(savedEvent._id === id) {
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
      .catch((err) => {
        console.log(err);
      })
  }

  save = () => {
    const id = this.props.user._id;
    const eventId = this.props.match.params.id;

    userService.saveEvent(id, eventId)
      .then( () => {
        this.setState({ eventIsSaved: true})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  unsave = () => {
    const id = this.props.user._id;
    const eventId = this.props.match.params.id;

    userService.removeSavedEvent(id, eventId)
    .then( () => {
      this.setState({ eventIsSaved: false})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  delete = () => {
    const id = this.props.match.params.id;
    eventService.delete(id)
    .then( () => this.props.history.push('/event'))
    .catch( (err) => {
      console.log(err);
    });
  }

  formatDate = d => {
    let date = new Date(d);
    let dd = date.getDate(); 
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear(); 
    if(dd<10){dd='0'+dd} ;
    if(mm<10){mm='0'+mm};
    return d = dd+'/'+mm+'/'+yyyy;
  } 

  formatHour = d => {
    let date = new Date(d);
    let hh = date.getHours();
    let mm = date.getMinutes();
    if(hh<10){hh='0'+hh};
    if(mm<10){mm='0'+mm};
    return d = hh+':'+mm;
  }

  render() {
    const { user } = this.props; 
    const{ image, title, attendingAlumni, streetAddress, city, date, bootcamp, description, eventUrl, _id } = this.state.event;

    let url = `https://www.google.com/maps/embed/v1/search?q=${streetAddress},+${city}&key=${process.env.REACT_APP_GOOGLE_API}`;
    return (
      <div className="container">
        <section className="section">

          <TopNav />

          <div className="page-body">
            <div className="is-flex is-horizontal-center ">
              <figure className="image is-fullwidth">
                <img src={image} alt="Event cover" />
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
                        <p className="has-text-weight-bold">Alumni interested in this event:</p>
                        <ul className="alumni-attending">
                        { attendingAlumni.map( (alumni, index) => {
                            if(index <= 3) {
                              return(<Link to={`/alumni/${alumni._id}`} key={alumni._id}>
                                <li>{alumni.firstName} {alumni.lastName}</li>
                              </Link>)
                            } else {
                              return null;
                            }
                          })
                        }
                        </ul>
                      </div>)
                    : null
                  : null
                }
              </div>

              <div className="event-info">
                <div className="is-flex">
                  <p className="has-text-weight-bold">Where:&nbsp;&nbsp;</p>
                  <p>{streetAddress}, {city}</p>
                </div>
                <div className="is-flex">
                  <p className="has-text-weight-bold">When:&nbsp;&nbsp;</p>
                  <p>{this.formatDate(date)} - {this.formatHour(date)}</p>
                </div>
                <div className="is-flex">
                  <p className="has-text-weight-bold">For:&nbsp;&nbsp;</p>
                  <p>{bootcamp}</p>
                </div>
                <div className="is-flex">
                  <p className="has-text-weight-bold">About:&nbsp;&nbsp;</p>
                  <p>{description}</p>
                </div>
                <div className="map">
                  <iframe title="map" frameBorder="0" style={{ width: "100%", height: "400px"}} src={url}>
                  </iframe>
                </div>
                <button className="button is-link is-outlined is-fullwidth">
                  <a href={eventUrl} target="_blank" rel="noopener noreferrer">Read more about the event</a>
                </button>
              </div>

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

          <BottomNav />

        </section>
      </div>
    )
  }
}


export default withAuth(ShowEvent);