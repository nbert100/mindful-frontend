//add attributes from provyder when connected to make "Route Cardiologist Appointment with provyder on date"
//change that ugly date
import React from 'react'

const Appointments = (props) => {
console.log(props)
     return (
       <div>
         {props.appointments && props.appointments.map(appointment => 
          <li key={appointment.id}>{appointment.kind} appointment on {appointment.when} </li>)}
           
      </div> 
     )
}
    


export default Appointments