//add attributes from provyder when connected to make "Route Cardiologist Appointment with provyder on date"
//change that ugly date
//how to access client and provyder from these props? for selectable provyder
import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { removeAppointment } from "../../actions/removeAppointment";

const Appointments = (props) => {
  const formatTime = (time) => moment(time).format("MMMM Do YYYY, h:mm a");
  const thisProvyder = (appointment) => {
    let appProv = props.provyders.find(
      (provyder) => provyder.id === appointment.provyder_id
    );
    return appProv;
  };

  const removeAppointment = (appointment) => {
    props.removeAppointment(appointment);
  };
  return (
    <div className="appointment-container">
      <h5>Appointments:</h5>
      <br></br>
      {props.appointments &&
        props.appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.kind} appointment on {formatTime(appointment.when)}{" "}
            with Dr.{thisProvyder(appointment).last_name},{" "}
            {thisProvyder(appointment).specialty}
            <span
              aria-label="and x"
              role="img"
              onClick={() => props.removeAppointment(appointment)}
            >
              ❌
            </span>
          </li>
        ))}
    </div>
  );
};

export default connect(null, { removeAppointment })(Appointments);
