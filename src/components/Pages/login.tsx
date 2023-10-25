import React, { Component } from "react";
import "../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    // You can add login logic here
    // For a basic example, you can print the username and password to the console
    console.log("Username: ", this.state.username);
    console.log("Password: ", this.state.password);
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
