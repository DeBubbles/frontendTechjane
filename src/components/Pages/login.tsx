import React, { Component } from "react";
import axios from 'axios';
import "../css/authentication.css";
import Home from "./Home";

class Login extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      error: "",
      showCredentials: false,
    };
  }

  handleInputChange = (event: any) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = async (event: any) => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await axios.post(
        'https://localhost:7279/User/Login',
        {
          username: username,
          password: password
        },
        {
          headers: {
            'X-Api-Key': 'F244428FB88143F9A8FA93EFF965CE73'
          }
        }
      );

      const data = response.data;
      console.log(response.status)

      if (response.status === 200) {
        //inloggen
        //juiste pagina routen

        console.log("finalllllllllllllllllly")
        console.log('Login successful', data.username);
        this.setState({ loggedIn: true, error: "" });
      } else {
        this.setState({ error: "Email or password is wrong", loggedIn: false });
      }

    } catch (error) {
      this.setState({ error: "An error occurred during login", loggedIn: false });
      console.error('Login', error);
    }

    this.setState({ showCredentials: true });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <Home username={this.state.username} />
        </div>
      );
    }

    return (
      <div className="authentication-container">
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <a href="forgotpassword">Password vergeten?</a>

      </div>
    );
  }
}

export default Login;
