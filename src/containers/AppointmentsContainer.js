import React from 'react'
import AppointmentInput from '../components/AppointmentInput'
import Appointments from '../components/Appointments'
// import Provyder from '../components/Provyder'



class AppointmentsContainer extends React.Component {

    // componentDidMount() {
    //     let searchableProvyders = [];
    //     fetch('http://localhost:8080/api/v1/provyders')
    //     .then(res => {
    //         return res.json()
    //     }).then(data => {
    //         searchableProvyders = data.results.map((provyder) => {
    //             return provyder
    //         })
    //         console.log(searchableProvyders)
    //         this.setState({
    //             provyders: searchableProvyders,
    //         })
    //     })
    // }


    render() {
        return (
            <div>
                <AppointmentInput />
                {/* <Provyder state={this.state} /> */}
                {/* <AppointmentInput client={this.props.client}/> */}
                <Appointments appointments={this.props.client && this.props.client.appointments}/>
            </div>
        )
    }
}



export default AppointmentsContainer