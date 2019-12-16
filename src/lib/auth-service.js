import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: `${baseUrl}/auth`,
      withCredentials: true,
    });
  }

  signup(user) {
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = user;
    return this.auth
      .post('/signup', { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin })
      .then(({ data }) => data);
  }

  login(user) {
    const { email, password } = user;
    return this.auth
      .post('/login', { email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/logout', {}).then(response => response.data);
  }

  me() {
    return this.auth.get('/me').then(response => response.data);
  }
}

const axiosRequestFunctions = new Auth();
export default axiosRequestFunctions;
