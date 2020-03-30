//kinda the show page

import React from "react";
import { Redirect } from "react-router-dom";

const Provyder = props => {
  let provyder = props.provyders.provyders.filter(
    provyder => provyder.id == props.match.params.id
  )[0];

  return (
    <div>
      <h2>
        {/* {provyder ? null : <Redirect to='/provyders' />}
                {provyder ? provyder.first_name : null} {provyder ? provyder.last_name : null}, {provyder ? provyder.title : null} */}
        {provyder.first_name} {provyder.last_name}, {provyder.title} -{" "}
        {provyder.specialty}
      </h2>
    </div>
  );
};

export default Provyder;
