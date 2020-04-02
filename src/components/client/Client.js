// because we're just displaying information should use functional component
import React from "react";
import { useParams } from "react-router-dom";
import AppointmentInput from "../../components/appointment/AppointmentInput";
import Appointments from "../../components/appointment/Appointments";

const Client = props => {
  let { id } = useParams();
  let client = props.clients.find(client => client.id == id);
  return (
    <div>
      <h2>
        {client.last_name}, {client.first_name} - {client.cin}
      </h2>
      <AppointmentInput client={client} />
      <Appointments appointments={client.appointments} />
    </div>
  );
};

export default Client;
