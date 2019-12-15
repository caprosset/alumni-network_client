import axios from 'axios';

class User {
  constructor() {
    this.user = axios.create({
      baseURL: 'http://localhost:5000/user',
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

  updateOne(id, userUpdated) {
    return this.user
      .put(`/edit/${id}`, userUpdated)
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
    .put(`/${id}/saved-jobs`)
    .then(({ data }) => data);
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
    .put(`/${id}/saved-events`)
    .then(({ data }) => data);
  }
}

const userService = new User();
export default userService;
