import React, { Component } from 'react';
import eventService from '../lib/event-service';

import Searchbar from '../components/Searchbar';
import SearchFilters from '../components/SearchFilters';
// import Navbar from '../components/Navbar';
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
      .catch((err) => {
        console.log(err);
      })
  }

  filterEvents = searchTerm => {
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
  
    
  multiFilter = (search) => {
    let filteredEvents = [];

    filteredEvents = this.state.listOfEvents.filter( event => { 
      if(search.bootcamp !== 'all' && search.city === 'all') {
        return (event.bootcamp === search.bootcamp)
      } else if (search.bootcamp === 'all' && search.city !== 'all') {
        return (event.city === search.city)
      } else if (search.bootcamp !== 'all' && search.city !== 'all') {
        return (event.bootcamp === search.bootcamp && event.city === search.city)
      } else if (search.bootcamp === 'all' && search.city === 'all') {
        return true;
      } 
    })
    
    this.setState({ eventsFiltered: filteredEvents })
  }


  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="top-search-nav navbar is-fixed-top">
            <Searchbar filterByTerm={this.filterEvents} />
            <SearchFilters filterByProperty={this.multiFilter} />
            {/* <Navbar /> */}
          </div>

          <div  className="results-list">
            <h3 className="title is-3">Events</h3>
            {
              this.state.eventsFiltered.map( (oneEvent, index) => {
                return <EventCard key={index} {...oneEvent} /> 
              })
            }
          </div>

          <BottomNav  />
        </section>
      </div>
    );
  }
}

export default ListEvents;
