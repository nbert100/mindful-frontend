// because we're just displaying information should use functional component
import React from 'react'
import {Redirect} from 'react-router-dom'

const Client = (props) => {
     //be careful with this id issue if some clients are deleted
    let client = props.clients[props.match.params.id - 1]
    
    return (
        
        <li>
            {/* {client ? null : <Redirect to='/clients' />} */}
            {client ? client.last_name : null}, {client ? client.first_name : null} - {client ? client.cin : null}
            
        </li>
    )

}

export default Client