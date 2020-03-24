import React from 'react'
import AppointmentInput from '../components/AppointmentInput'
import Appointments from '../components/Appointments'



class AppointmentsContainer extends React.Component {

    render() {
        return (
            <div>
                <AppointmentInput />
                {/* <AppointmentInput client={this.props.client}/> */}
                <Appointments appointments={this.props.client && this.props.client.appointments}/>
            </div>
        )
    }
}



export default AppointmentsContainer