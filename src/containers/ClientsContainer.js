//this is where we render the components
//will contain other components for our clients
//if we want to fetch the accounts from our backend and use those accounts from our backend
//how do we do that? connect to store
// to see something we mapstatetoprops
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchClients } from '../actions/fetchClients'
import Clients from '../components/Clients'
import ClientInput from '../components/ClientInput'
// import Client from '../components/Client'

class ClientsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchClients()
    }

    render() {
        return(
            <div>
                <Route path='/clients/new' component={ClientInput} />
                {/* <ClientInput /><br></br> */}
                <Clients clients={this.props.clients} />
            </div>
        )
    }

}

//give this component access through props to the clients inside our state
const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

// connect will use that first function (whatever it is) to 
//get your redux store and map it whatever is returned in that function as props
export default connect(mapStateToProps, {fetchClients})(ClientsContainer)