import axios from 'axios';

class AuthService {
  constructor() {;
    let service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true,
    });
    this.service = service;
  }




signup = (username, password, firstName, lastName, email) => {
  // console.log("starting the sign up process from the auth service @@@@@@@@@@@@@@@@", username);
  // console.log("starting the sign up process from the auth service @@@@@@@@@@@@@@@@", password);
  // console.log("starting the sign up process from the auth service @@@@@@@@@@@@@@@@", firstName);
  // console.log("starting the sign up process from the auth service @@@@@@@@@@@@@@@@", lastName);
  // console.log("starting the sign up process from the auth service @@@@@@@@@@@@@@@@", email);
    return this.service.post('/signup', {username, password, firstName, lastName, email})
    .then(response => {
      console.log("info from sign up from the auth service file >>>>>>>>>>>> ", response.data);
      return response.data
    })
  }


  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }


  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }


}

export default AuthService;