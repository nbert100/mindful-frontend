// because we're just displaying information should use functional component
import React from 'react'

const Client = (props) => {

    return (
        <li>
            {props.client.last_name}, {props.client.first_name} - {props.client.cin}
        </li>
    )

}

export default Client