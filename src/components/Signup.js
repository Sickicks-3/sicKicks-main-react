import React, { Component } from "react";
import AuthService from "./auth/auth-service";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "../App.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      avatar: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    // const avatar = this.state.avatar;

    this.service
      .signup(
        username,
        password,
        firstName,
        lastName,
        email,
        // avatar
      )
      .then(theUserObject => {
        this.setState({
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
          avatar: ""
        });
        this.props.setTheUserInTheAppComponent(theUserObject);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up-box">
        <div className="for-signup move-the-form signup-box-class">
          <form onSubmit={this.handleFormSubmit}>
            <h1 id="for-h1">Join and become a pro!</h1>
            <br />

            <label>Username</label>
            <input
              className="the-inputs"
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />
            <label>Password</label>
            <input
              className="the-inputs"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />

            <br />
            <br />
            <label>First name</label>
            <input
              className="the-inputs"
              name="firstName"
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />
            <label>Last name</label>
            <input
              className="the-inputs"
              name="lastName"
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />

            <label>Email</label>
            <input
              className="the-inputs"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />
            

            <button className="the-inputs" type="submit" > Sign Up </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
