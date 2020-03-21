export const addAppointment = (appointment) => {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/clients/${this.client.id}/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(appointment => dispatch({type: 'ADD_APPOINTMENT', payload: appointment}))
    }
}