import React from "react";
import '../css/Admin.css';
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin</h1>
      
      <ul>
        <li> <Link to={"/alter-quiz"}> Alter Quiz </Link></li>
        <li> <Link to={"/add-quiz"}> Add Quiz </Link> </li>
        <li><Link to={"/remove-quiz"}>Remove Quiz </Link> </li>
      </ul>
    </div>
  );
}

export default Admin;
