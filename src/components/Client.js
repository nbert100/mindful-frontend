// because we're just displaying information should use functional component
import React from 'react'
import {Redirect} from 'react-router-dom'
// import ProydersContainer from '../containers/ProvydersContainer'
import AppointmentsContainer from '../containers/AppointmentsContainer'

const Client = (props) => {

     //be careful with this id issue if some clients are deleted
    // let client = props.clients[props.match.params.id - 1]
    let client = props.clients.filter(client => client.id == props.match.params.id)[0]
    console.log(client)
    return (
        <div>
        <h2>
            {/* {client ? null : <Redirect to='/clients' />} */}
            {client ? client.last_name : null}, {client ? client.first_name : null} - {client ? client.cin : null}
            
        </h2>
        {/* <ProydersContainer client={client} /> */}
        <AppointmentsContainer client={client} />
        </div>
    )

}

export default Client