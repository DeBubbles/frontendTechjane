import React from "react";
import '../css/Admin.css';
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin</h1>
      
      <ul>
        <li>Alter Quiz</li>
        <li> <Link to={"/add-quiz"}> Add Quiz </Link> </li>
        <li>Remove Quiz</li>
      </ul>
    </div>
  );
}

export default Admin;
