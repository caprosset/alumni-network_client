import React, { Component } from 'react';
import eventService from '../lib/event-service';

class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    image: '',
    bootcamp: 'Web Development',
    streetAddress: '',
    city: 'Barcelona',
    eventUrl: ''
  }

  handleChange = event => {
    // console.log('HELLO');

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    // get all the values from the state
    const { title, description, image, date, bootcamp, streetAddress, city, eventUrl } = this.state;

    const newEvent = { title, description, image, date, bootcamp, streetAddress, city, eventUrl };
    console.log('EVENT INSERTED', newEvent);

    eventService
      .create(newEvent)
      .then(event => {
        this.props.history.push(`/event/${event._id}`);
        console.log('EVENT CREATED', event);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { title, description, image, date, bootcamp, streetAddress, city, eventUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Event title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={this.handleChange}
          />

          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={date}
            onChange={this.handleChange}
          />

          <label>Address:</label>
          <input
            type="text"
            name="streetAddress"
            value={streetAddress}
            onChange={this.handleChange}
          />

          <label>City:</label>
          <select name="city" value={city} onChange={this.handleChange}>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Berlin">Berlin</option>
            <option value="Miami">Miami</option>
            <option value="Mexico City">Mexico City</option>
            <option value="Sao Paulo">Sao Paulo</option>
          </select>

          <label>Recommended for:</label>
          <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
            <option value="Web Development">Web Development</option>
            <option value="UX Design">UX Design</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <label>Event description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />

          <label>Event url:</label>
          <input
            type="text"
            name="eventUrl"
            value={eventUrl}
            onChange={this.handleChange}
          />

          <input type="submit" value="Create event" />
        </form>
      </div>
    )
  }
}

export default CreateEvent;