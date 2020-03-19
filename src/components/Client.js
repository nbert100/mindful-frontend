// because we're just displaying information should use functional component
import React from 'react'

const Client = (props) => {
     
    let client = props.clients[props.match.params.id - 1]
    
    return (
        <li>
            {client ? client.last_name : null}, {client ? client.first_name : null} - {client ? client.cin : null}
        </li>
    )

}

export default Client