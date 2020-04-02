// has a list of all clients
//functional - just showing list of clients
// gets the clients through  clients container through props
//in functional component you have to process props through argument
// can't use render in functional component

// change this to client cards instead of the links

import React from "react";
import { Link } from "react-router-dom";
import Client from "./Client";
import ClientInput from "./ClientInput";

const Clients = props => {
  return (
    <div className="client-container">
      <h4>My Clients</h4>
      <br></br>
      {props.clients.map(client => (
        <li key={client.id}>
          <Link to={`clients/${client.id}`}>
            {client.last_name}, {client.first_name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Clients;
