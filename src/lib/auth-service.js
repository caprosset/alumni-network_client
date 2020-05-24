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
    return this.auth
      .post('/signup', user)
      .then(({ data }) => data);
  }

  login(user) {
    return this.auth
      .post('/login', user)
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/logout', {})
      .then(({ data }) => data);
  }

  me() {
    return this.auth.get('/me')
      .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Auth();
export default axiosRequestFunctions;
