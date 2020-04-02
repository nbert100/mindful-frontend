// because we're just displaying information should use functional component
import React from "react";
import { useParams } from "react-router-dom";
import AppointmentInput from "../../components/appointment/AppointmentInput";
import Appointments from "../../components/appointment/Appointments";

const Client = props => {
  const formatPhone = phone => {
    phone = client.phone.replace(/[^\d]/g, "");
    if (phone.length == 10) {
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    return null;
  };
  let { id } = useParams();
  let client = props.clients.find(client => client.id == id);
  return (
    <div>
      <h2>
        {client.first_name} {client.last_name}
      </h2>
      <p>Client Identification Number: {client.cin}</p>
      <div className="client-contact-info">
        <br></br>
        <h5>Contact Information:</h5>
        <p>Phone Number: {formatPhone(client.phone)}</p>
        <p>
          Mailing Address: {client.address} {client.zipcode}
        </p>
      </div>
      <br></br>
      <AppointmentInput client={client} />
      <Appointments appointments={client.appointments} />
    </div>
  );
};

export default Client;
