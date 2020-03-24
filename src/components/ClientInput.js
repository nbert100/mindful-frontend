// where the form lives
import React from 'react'
import {connect} from 'react-redux'

import {addClient} from '../actions/addClient'


class ClientInput extends React.Component {
    
    state = {
        first_name: '',
        last_name: '',
        cin: '',
        phone: '',
        address: '',
        zipcode: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addClient(this.state)
        this.setState({
            first_name: '',
            last_name: '',
            cin: '',
            phone: '',
            address: '',
            zipcode: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Client:</label>
                    <input type='text' placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} /> 
                    <input type='text' placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                    <br></br>
                    <label>CIN:</label>
                    <input type='number' placeholder="Client Identification Number" name="cin" value={this.state.cin} onChange={this.handleChange} />
                    <br></br>
                    <label>Phone:</label>
                    <input type='tel' placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    <br></br>
                    <label>Address:</label>
                    <input type='text' placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange} />
                    <input type='number' placeholder="Zip Code" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
                    <br></br>
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}

export default connect(null, {addClient})(ClientInput)