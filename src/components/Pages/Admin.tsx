import React from "react";
import '../css/Admin.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus, faTrashAlt,faUserCog } from "@fortawesome/free-solid-svg-icons";


function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin <FontAwesomeIcon icon={faUserCog} size="lg" /></h1> 
      <ul>
        <li>
          <Link to={"/alter-quiz"}>
            <FontAwesomeIcon icon={faPencilAlt} /> Alter Quiz
          </Link>
        </li>
        <li>
          <Link to={"/add-quiz"}>
            <FontAwesomeIcon icon={faPlus} /> Add Quiz
          </Link>
        </li>
        <li>
          <Link to={"/remove-quiz"}>
            <FontAwesomeIcon icon={faTrashAlt} /> Remove Quiz
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Admin;
