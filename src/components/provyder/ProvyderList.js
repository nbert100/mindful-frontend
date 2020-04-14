import React from "react";
import ProvyderHeader from "./ProvyderHeader";
import { Link } from "react-router-dom";

const ProvyderList = (props) => {
  return props.provyders.map((provyder) => (
    <div key={provyder.id}>
      <Link to={`/provyders/${provyder.id}`}>
        {provyder.first_name} {provyder.last_name}, {provyder.title}
      </Link>
      <ProvyderHeader provyder={provyder} />
    </div>
  ));
};

export default ProvyderList;
