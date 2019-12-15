import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import eventService from '../lib/event-service';
import userService from '../lib/user-service';
import { Link } from 'react-router-dom';


class ShowEvent extends Component {
  constructor(props){
    super(props);

    this.state = {
      event: {}
    };		
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('EVENT ID', id);

    eventService.getOne(id)
      .then((event)=>{
        this.setState({ event })
      })
      .catch((err) => console.log(err));
  }

  // save = () => {
  //   const id = this.props.user._id;
  //   const eventId =  this.props.match.params.id;

  //   userService.save(id, eventId)
  //   .then( (data) => console.log(data))
  //   .catch( (err) => console.log(err));
  // }

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
          {/* <button onClick={() => this.save()}>Save this event</button> */}
        </div>
        {
          // if user is admin, display 'Edit' and 'Delete' button
          user.isAdmin
          ? 
            <div>
              <Link to={`/event/edit/${this.state.event._id}`}>
                <button>Edit event</button>
              </Link> 
              <button onClick={() => this.delete(this.state.event._id)}>Delete event</button>
            </div>
          : null
        }

        { 
          <button onClick={ () => this.props.history.goBack()}>Go back</button>
        }
      </div>
    )
  }
}



export default withAuth(ShowEvent);