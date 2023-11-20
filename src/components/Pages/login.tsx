import React, { Component } from "react";
import "../css/authentication.css";

class Login extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showCredentials: false,
    };
  }

  handleInputChange = (event: any) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();

    this.setState({ showCredentials: true });
  };

  render() {
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
              placeholder="Passwoord"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <a href="forgotpassword">Passwoord vergeten?</a>

        {this.state.showCredentials && (
          <div>
            <p>Email: {this.state.email}</p>
            <p>Password: {this.state.password}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
