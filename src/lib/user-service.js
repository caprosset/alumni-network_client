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
}

const userService = new User();
export default userService;
