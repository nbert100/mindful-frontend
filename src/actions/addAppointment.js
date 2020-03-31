export const addAppointment = appointment => {
  return dispatch => {
    fetch(
      `http://localhost:5000/api/v1/clients/${appointment.client_id}/appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
      }
    )
      .then(res => res.json())
      .then(appointment =>
        dispatch({ type: "ADD_APPOINTMENT_TO_CLIENT", payload: appointment })
      );
  };
};
