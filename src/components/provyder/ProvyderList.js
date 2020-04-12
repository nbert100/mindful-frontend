import React from "react";
import { Link } from "react-router-dom";

const ProvyderList = (props) => {
  return props.provyders.map((provyder) => (
    <li key={provyder.id}>
      <Link to={`/provyders/${provyder.id}`}>
        {provyder.first_name} {provyder.last_name}, {provyder.title}
      </Link>
    </li>
  ));
};

export default ProvyderList;
