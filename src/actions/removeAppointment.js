export const removeAppointment = appointment => {
  return dispatch => {
    return fetch(
      `http://localhost:8080/api/v1/clients/${appointment.client_id}/appointments/${appointment.id}`,
      {
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(res =>
        dispatch({ type: "REMOVE_APPOINTMENT", payload: appointment })
      );
  };
};
