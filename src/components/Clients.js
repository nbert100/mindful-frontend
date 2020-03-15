// has a list of all clients
//functional - just showing list of clients
// gets the clients through  clients container through props
//in functional component you have to process props through argument
// can't use render in functional component
import React from 'react'

const Clients = (props) => {
    
    return (
        <div>
          {props.clients.map(client => <li key={client.id}>  {client.last_name}, {client.first_name} - {client.cin} </li>)}  
        </div>
    )
}

export default Clients