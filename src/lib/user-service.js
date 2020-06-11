import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

class User {
  constructor() {
    this.user = axios.create({
      baseURL: `${baseUrl}/user`,
      withCredentials: true,
    });
  }

  getAll() {
    return this.user
      .get()
      .then(({ data }) => data);
  }

  // user.getByFilter()

  getOne(id) {
    return this.user
      .get(`/${id}`) 
      .then(({ data }) => data);
  }

  updateOne(userUpdated) {
    return this.user
      .put(`/edit`, userUpdated)
      .then(({ data }) => data);
  }

  saveJob(id, jobId) {
    return this.user
      .put(`/${id}/save-job/${jobId}`)
      .then(({ data }) => data);
  }

  removeSavedJob(id, jobId) {
    return this.user
    .put(`/${id}/remove-job/${jobId}`)
    .then(({ data }) => data);
  }

  getAllSavedJobs(id) {
    return this.user
    .put(`/${id}`)
    .then(({ data }) => data.savedJobs);
  }

  // user.saveEvent(id, eventId)
  saveEvent(id, eventId) {
    return this.user
      .put(`/${id}/save-event/${eventId}`)
      .then(({ data }) => data);
  }

  removeSavedEvent(id, eventId) {
    return this.user
    .put(`/${id}/remove-event/${eventId}`)
    .then(({ data }) => data);
  }

  getAllSavedEvents(id) {
    return this.user
    .put(`/${id}`)
    .then(({ data }) => data.savedEvents);
  }
}

const userService = new User();
export default userService;
