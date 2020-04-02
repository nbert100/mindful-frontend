export const removeAppointment = appointment => {
  return dispatch => {
    fetch(
      `http://localhost:8080/api/v1/clients/${appointment.client_id}/appointments/${appointment.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(appointment =>
        dispatch({
          type: "REMOVE_APPOINTMENT",
          payload: appointment
        })
      );
  };
};
