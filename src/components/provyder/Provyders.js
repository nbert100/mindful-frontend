import React from "react";

import { Link } from "react-router-dom";

const Provyders = props => {
  return (
    <div className="provyder-container">
      <h4>Providers:</h4>
      <br></br>
      {props.provyders.map(provyder => (
        <li key={provyder.id}>
          <Link to={`/provyders/${provyder.id}`}>
            {provyder.first_name} {provyder.last_name}, {provyder.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Provyders;
