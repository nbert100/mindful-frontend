// because we're just displaying information should use functional component
import React from "react";
import { Redirect } from "react-router-dom";
// import ProydersContainer from '../containers/ProvydersContainer'
import AppointmentInput from "./AppointmentInput";
import Appointments from "./Appointments";

const Client = props => {
  //be careful with this id issue if some clients are deleted
  // let client = props.clients[props.match.params.id - 1]

  let client = props.clients.filter(
    client => client.id == props.match.params.id
  )[0];
  console.log(client);
  return (
    <div>
      <h2>
        {client.last_name}, {client.first_name} - {client.cin}
      </h2>
      <AppointmentInput providers={providers} client={client} />
      <Appointments appointments={client.appointments} />
    </div>
  );
};

export default Client;
