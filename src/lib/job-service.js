import axios from 'axios';

class Job {
  constructor() {
    this.job = axios.create({
      baseURL: 'http://localhost:5000/job',
      withCredentials: true,
    });
  }

  getAll() {
    return this.job
      .get()
      .then(({ data }) => data);
  }

  getOne(id) {
    return this.job
      .get(`/${id}`)
      .then(({ data }) => data);
  }

  updateOne(id, jobUpdated) {
    return this.job
      .put(`/edit/${id}`, jobUpdated)
      .then(({ data }) => data);
  }
}

const jobService = new Job();
export default jobService;
