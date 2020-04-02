//kinda the show page

import React from "react";
import { Redirect } from "react-router-dom";

const Provyder = props => {
  const formatPhone = phone => {
    phone = provyder.phone.replace(/[^\d]/g, "");
    if (phone.length == 10) {
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    return null;
  };

  let provyder = props.provyders.find(
    provyder => provyder.id == props.match.params.id
  );

  return (
    <div>
      <h2>
        {provyder.first_name} {provyder.last_name}, {provyder.title} -{" "}
        {provyder.specialty}
      </h2>
      <br></br>
      <div className="provider-contact-container">
        <h5>Contact Information:</h5>
        <p>Phone Number: {formatPhone(provyder.phone)}</p>
        <p>Fax Number: {formatPhone(provyder.fax)}</p>
        <p>
          Address: {provyder.address} {provyder.zipcode}
        </p>
      </div>
    </div>
  );
};

export default Provyder;
