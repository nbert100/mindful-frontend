import React from 'react'
import { connect } from 'react-redux'
import { addAppointment } from '../actions/addAppointment'

class AppointmentInput extends React.Component {
    state = {
        when: '',
        kind: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAppointment(this.state, this.props.client.id)
        this.setState({
            when: '',
            kind: 'Initial'
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Provider</label>
                    <select>

                    </select>
                    <label>When:</label>
                    <input type="date" name="when" value={this.state.when} onChange={this.handleChange} />
                    <label>Type of Appointment:</label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>Initial</option>
                        <option>Routine</option>
                    </select>
                    <input type="submit"/>
                </form>   
            </div>
            
        )
    }



}

export default connect(null, {addAppointment})(AppointmentInput)