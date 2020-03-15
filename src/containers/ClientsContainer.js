//this is where we render the components
//will contain other components for our clients
import React from 'react'
import Clients from '../components/Clients'
import ClientInput from '../components/ClientInput'

class ClientsContainer extends React.Component {

    render() {
        return(
            <div>
                <ClientInput />
                <Clients />
            </div>
        )
    }

}

export default ClientsContainer