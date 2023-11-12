import React, { Component } from "react";
import "../css/login.css";

class ForgotPassword extends Component {
  constructor(props : any) {
    super(props);
    this.state = {
      email: "",
      showSuccessMessage: false,
      error: null,
    };
  }

  handleInputChange = (event : any) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleResetPassword = (event : any) => {
    event.preventDefault();
    this.setState({ error: null });
    // password reset email versturen code hier plaatsen
    this.setState({ showSuccessMessage: true });
  };
  

  render() {
    return (
      <div className="login-container">
        <h1>Wachtwoord herstellen</h1>
        <form onSubmit={this.handleResetPassword}>
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
          <button type="submit">Wachtwoord herstellen</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
        {this.state.showSuccessMessage && (
          <p className="success">A password reset link has been sent to your email address.</p>
        )}
        <p>Alles in orde? <a href="/login">Login hier!</a></p>
      </div>
    );
  }
}

export default ForgotPassword;
