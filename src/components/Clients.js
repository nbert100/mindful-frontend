// has a list of all clients
//functional - just showing list of clients
// gets the clients through  clients container through props
//in functional component you have to process props through argument
// can't use render in functional component
import React from 'react'
import Client from './Client'


const Clients = (props) => {
    return (
        <div>
          {props.clients.map(client => <div key={client.id}><Client client={client}/></div>)}  
        </div>
    )
}

export default Clients