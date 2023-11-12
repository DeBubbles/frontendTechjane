import React, { Component } from "react";
import "../css/authentication.css";

class Register extends Component {
  constructor( props : any ) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      //lastname: "",
      error: null,
      showCredentials: false,
    };
  }

  handleInputChange = (event : any) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegister = (event : any) => {
    event.preventDefault();
  
    const { password, confirmPassword } = this.state;
  
    if (password !== confirmPassword) {
      this.setState({ showCredentials: false, error: "Wachtwoorden komen niet overeen." });
    } else {
      this.setState({ error: null });
      this.setState({ showCredentials: true });
    }
  };
  

  render() {
    return (
      <div className="authentication-container">
        <h1>Register</h1>
        <form onSubmit={this.handleRegister}>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="Gebruikersnaam"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          {/*
          <div className="input-container">
            <input
              type="text"
              name="lastname"
              placeholder="Achternaam"
              value={this.state.lastname}
              onChange={this.handleInputChange}
              required
            />
          </div>
          */}
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
              placeholder="Wachtwoord"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Bevestig Wachtwoord"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <p>Already have an account? <a href="login">Login here!</a></p>

        {this.state.showCredentials && (
          <div>
            <p>Username: {this.state.username}</p>
            <p>Email: {this.state.email}</p>
            <p>Password: {this.state.password}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Register;
