import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

class Event {
  constructor() {
    this.event = axios.create({
      baseURL: `${baseUrl}/event`,
      withCredentials: true,
    });
  }

  getAll() {
    return this.event
      .get()
      .then(({ data }) => data);
  }

  // event.getByFilter()

  getOne(id) {
    return this.event
      .get(`/${id}`)
      .then(({ data }) => data);
  }

  create(newEvent) {
    return this.event
      .post('/create', newEvent)
      .then(({ data }) => data);
  }

  updateOne(id, eventUpdated) {
    return this.event
      .put(`/edit/${id}`, eventUpdated)
      .then(({ data }) => data);
  }

  delete(id) {
    return this.event
      .get(`/delete/${id}`)
      .then(({ data }) => data);
  }
}

const eventService = new Event();
export default eventService;
