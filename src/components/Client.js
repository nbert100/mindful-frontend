// because we're just displaying information should use functional component
import React from "react";
import { Redirect } from "react-router-dom";
// import ProvydersContainer from "../containers/ProvydersContainer";
import AppointmentInput from "./AppointmentInput";
import Appointments from "./Appointments";

const Client = props => {
  let client = props.clients.find(client => client.id == props.match.params.id);
  console.log(client);
  return (
    <div>
      <h2>
        {client.last_name}, {client.first_name} - {client.cin}
      </h2>
      <AppointmentInput providers={client.provyders} client={client} />
      <Appointments appointments={client.appointments} />
    </div>
  );
};

export default Client;
