import React, { Component } from "react";
import "../css/login.css";

class Register extends Component {
  constructor( props : any ) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      showCredentials: false,
      error: null,
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
      <div className="login-container">
        <h1>Register</h1>
        <form onSubmit={this.handleRegister}>
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
          <div className="input-container">
            <input
              type="text"
              name="firstname"
              placeholder="Voornaam"
              value={this.state.firstname}
              onChange={this.handleInputChange}
              required
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <p>Already have an account? <a href="login">Login here!</a></p>

        {this.state.showCredentials && (
          <div>
            <p>Email: {this.state.email}</p>
            <p>Password: {this.state.password}</p>
            <p>Email: {this.state.firstname}</p>
            <p>Password: {this.state.lastname}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Register;
