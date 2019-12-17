import React, { Component } from 'react';
import eventService from '../lib/event-service';

import Searchbar from '../components/Searchbar';
import SearchFilters from '../components/SearchFilters';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import BottomNav from '../components/BottomNav';


class ListEvents extends Component {
  state = {
    listOfEvents: [],
    eventsFiltered: []
  }

  componentDidMount() {
    eventService.getAll()
      .then((allEvents)=>{
        this.setState({ listOfEvents: allEvents, eventsFiltered: allEvents })
      })
      .catch((err) => console.log(err));
  }

  filterEvents = searchTerm => {
		console.log('search term', searchTerm);

		// apply lower case to the search term
		const lowerSearchTerm = searchTerm.toLowerCase();
		
		const filteredEvents = this.state.listOfEvents.filter( event => {
				// apply lower case to the event title
        const eventTitle = event.title.toLowerCase();
        const eventDescription = event.description.toLowerCase();
				// filter only the evebts that include the search term in their title
				return (eventTitle.includes(lowerSearchTerm) || eventDescription.includes(lowerSearchTerm));
		})
		this.setState({ eventsFiltered: filteredEvents })
  }
  
    
  multiFilter = (name, value) => {
    let filteredEvents = [];
    if(name === 'bootcamp') {
      if (value === 'all') {
        filteredEvents = this.state.listOfEvents;
      } else {
        filteredEvents = this.state.listOfEvents.filter( event => {
          return (event.bootcamp === value)
        })
      }
    } else if (name === 'city') {
      if (value === 'all') {
        filteredEvents = this.state.listOfEvents;
      } else {
        filteredEvents = this.state.listOfEvents.filter( event => {
          return (event.city === value)
        })
      }
    } 
    this.setState({ eventsFiltered: filteredEvents })
  }


  render() {
    // console.log(this.state.listOfEvents);
    return (
      <div>
        <Searchbar filterByTerm={this.filterEvents} />
        <SearchFilters filterByProperty={this.multiFilter} />
        <Navbar />
        <h1>All events</h1>
        {
          this.state.eventsFiltered.map( (oneEvent, index) => {
            return <EventCard key={index} {...oneEvent} /> 
          })
				}
        <BottomNav  />
      </div>
    );
  }
}

export default ListEvents;
