// has a list of all clients
//functional - just showing list of clients
// gets the clients through  clients container through props
//in functional component you have to process props through argument
// can't use render in functional component

// change this to client cards instead of the links

import React from 'react'
import {Route, Link} from 'react-router-dom'
// import Client from './Client'


const Clients = (props) => {
    return (
        <div>
          {props.clients.map(client => 
          <li key={client.id}>
            <Link to={`/clients/${client.id}`} >
            {client.last_name}, {client.first_name}
            </Link>
          </li>)}  
        </div>
    )
}

export default Clients