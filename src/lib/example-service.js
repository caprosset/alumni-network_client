import axios from 'axios';

class Example {
  constructor() {
    this.example = axios.create({
      baseURL: 'http://localhost:5000/examples',
      withCredentials: true,
    });
  }

  getAll() {
    return this.example
              .get()
              .then(({ data }) => data);
  }

  getOneById(id) {
    return this.example
              .get(`/${id}`)
              .then(({ data }) => data);
  }
}

// examplesService.getAll()
//   .then( (response) => response.data )
//   .catch( (err) => console.log(err));

// examplesService.getOneById( idString )
//   .then( ( { data } ) => data)
//   .catch( (err) => console.log(err));

const exampleService = new Example();

export default exampleService;
