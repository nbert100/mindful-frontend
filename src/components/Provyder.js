//kinda the show page

import React from "react";
import { Redirect } from "react-router-dom";

const Provyder = props => {
  let provyder = props.provyders.find(
    provyder => provyder.id == props.match.params.id
  );

  return (
    <div>
      <h2>
        {provyder.first_name} {provyder.last_name}, {provyder.title} -{" "}
        {provyder.specialty}
      </h2>
    </div>
  );
};

export default Provyder;
