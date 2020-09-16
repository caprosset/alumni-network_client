import React, { Component } from 'react';
import eventService from '../lib/event-service';
import cloudinaryService from '../lib/cloudinary-service';

import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    date: new Date(),
    image: '',
    bootcamp: 'All bootcamps',
    streetAddress: '',
    city: 'Barcelona',
    eventUrl: '',
    imageReady: true
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = event => {
    this.setState({ imageReady: false });

    const file = event.target.files[0];
    const imageFile = new FormData();

    imageFile.append('image', file);

    cloudinaryService.imageUpload(imageFile)
      .then(imageUrl => {
        this.setState({ image: imageUrl, imageReady: true });
      });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description, image, date, bootcamp, streetAddress, city, eventUrl } = this.state;
    const newEvent = { title, description, image, date, bootcamp, streetAddress, city, eventUrl };

    eventService
      .create(newEvent)
      .then(event => {
        this.props.history.push(`/event/${event._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { title, description, bootcamp, streetAddress, city, eventUrl } = this.state;
    return (
      <div className="container">
        <section className="section">

          <TopNav />

          <div className="page-body">
            <h3 className="title is-3">Post an event</h3>
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">

              <div className="field">
                <label className="label">Title of the event *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="What is the title of the event?"
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <input className="input" 
                    type="file"
                    name="image"
                    onChange={this.handleImageChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Date *</label>
                <div className="control">
                    <input 
                      className="input" 
                      type="datetime-local"
                      name="date"
                      onChange={this.handleChange} />
                </div>
              </div>

              <div className="field">
                <label className="label">Address *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Street, number"
                    type="text"
                    name="streetAddress"
                    value={streetAddress}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">City *</label>
                <div className="control">
                  <div className="select is-fullwidth">
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
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Recommended for *</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
                      <option value="All bootcamps">All bootcamps</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UX Design">UX Design</option>
                      <option value="Data Analytics">Data Analytics</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Event description *</label>
                <div className="control">
                  <textarea className="textarea"
                    placeholder="Description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <label className="label">Event page URL *</label>
                <div className="control">
                  <input className="input" required
                    placeholder="Url of the event"
                    type="text"
                    name="eventUrl"
                    value={eventUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="buttons bottom-buttons">
                  <button type="submit" disabled={!this.state.imageReady} className="button is-link is-light">Create event</button>
              </div>
            </form>
          </div>

          <BottomNav />

        </section>
      </div>
    )
  }
}

export default CreateEvent;