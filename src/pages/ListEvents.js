import React, { Component } from 'react';
import eventService from '../lib/event-service';

import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';

class ListEvents extends Component {
  state = {
    listOfEvents: []
  }

  componentDidMount() {
    eventService.getAll()
      .then((allEvents)=>{
        this.setState({ listOfEvents: allEvents })
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.listOfEvents);
    return (
      <div>
        <Navbar />
        <h1>All events</h1>
        <EventCard allEvents={this.state.listOfEvents} />
        { 
          <button onClick={ () => this.props.history.goBack()}>Go back</button>
        }
      </div>
    );
  }
}

export default ListEvents;
