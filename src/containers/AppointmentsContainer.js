import React from 'react'
import AppointmentInput from '../components/AppointmentInput'
import Appointments from '../components/Appointments'



class AppointmentsContainer extends React.Component {

    render() {
        return (
            <div>
                {/* <AppointmentInput client={this.props.client}/>
                <Appointments appointments={this.props.client && this.props.client.appointments}/> */}
                <AppointmentInput />
                <Appointments />
            </div>
        )
    }
}



export default AppointmentsContainer