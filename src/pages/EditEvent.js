import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import eventService from '../lib/event-service';
import cloudinaryService from '../lib/cloudinary-service';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class EditEvent extends Component {
  state= {
    title: '',
    description: '',
    date: '',
    image: '',
    bootcamp: 'Web Development',
    streetAddress: '',
    city: 'Barcelona',
    eventUrl: '',
    imageReady: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    eventService.getOne(id)
      .then((event)=>{
        console.log('EVENT', event);
        const { title, description, image, date, bootcamp, streetAddress, city, eventUrl } = event;

        this.setState({ title, description, image, date, bootcamp, streetAddress, city, eventUrl })
      })
      .catch((err) => console.log(err));
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
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

  pickerOnChange = date => {
    console.log('NEW DATE', new Date())
    console.log('IMAGE TO EDIT', date)
    this.setState({ date });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    // get all the values from the state
    const { title, description, image, date, bootcamp, streetAddress, city, eventUrl } = this.state;
    
    // define user id and updatedUser (body) to pass to the update function
    const { id } = this.props.match.params;
    const updatedEvent = { title, description, image, date, bootcamp, streetAddress, city, eventUrl };

    eventService.updateOne(id, updatedEvent)
    .then(() => {
        this.props.history.push(`/event/${id}`);
      })
    .catch(err => console.log(err));
  };


  render() {
    const { title, description, image, date, bootcamp, streetAddress, city, eventUrl } = this.state;
console.log('thedate',date);
//2019-12-24T19:04:00.000Z
//Tue Dec 17 2019 11:13:34 GMT+0100 (heure normale d’Europe centrale)

    // const { id } = this.props.match.params;
    // console.log('JOB ID', id)

    return (
      <div>
        <TopNav />
        <h1>Edit event</h1>
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

          <input type="submit" value="Save changes" />
        </form>
        <BottomNav />
      </div>
    )
  }
}


export default EditEvent;