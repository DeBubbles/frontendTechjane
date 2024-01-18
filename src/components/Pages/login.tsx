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
      // Redirect to a new page or handle the logged-in state as needed
      return (
        <div>
          <p>Welcome {this.state.username}</p>
          <Home/>
        </div>
      );
    }

    return (
      <div className="authentication-container">
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
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

        {/* {this.state.showCredentials && (
          <div>
            <p>Email: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
          </div>
        )} */}
      </div>
    );
  }
}

export default Login;