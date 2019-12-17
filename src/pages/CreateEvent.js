import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import eventService from '../lib/event-service';
import cloudinaryService from '../lib/cloudinary-service';

import styled from 'styled-components';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`


class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    date: new Date(),
    image: '',
    bootcamp: 'Web Development',
    streetAddress: '',
    city: 'Barcelona',
    eventUrl: '',
    imageReady: false
  }

  handleChange = event => {
    // console.log('HELLO');

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  pickerOnChange = date => {
    console.log('DATE', date);
    console.log('NEW DATE', new Date())

    this.setState({ date });
  }

  handleImageChange = event => {
    console.log('IMAGE', event.target.files[0]);

    const file = event.target.files[0];
    const imageFile = new FormData();

    imageFile.append('image', file);

    cloudinaryService.imageUpload(imageFile)
      .then(imageUrl => {
        console.log("the image ", imageUrl);
        this.setState({ image: imageUrl, imageReady: true });
        console.log('The image is the state', this.state.image);
      });
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
        <TopNav />
        <form onSubmit={this.handleFormSubmit}  encType="multipart/form-data">
          <label>Event title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={this.handleImageChange}
          />

          <label>Date:</label>
          <DateTimePicker
            name="date"
            value={date}
            onChange={this.pickerOnChange}
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

          <Button type="submit">Create event</Button>
        </form>
        <BottomNav />
      </div>
    )
  }
}

export default CreateEvent;