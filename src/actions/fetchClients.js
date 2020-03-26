//action creator is a function
//dispatch data instead of returning
export function fetchClients() {
    return (dispatch) => {
    
    fetch('http://localhost:5000/api/v1/clients')
    .then(res => res.json())
    .then(clients => dispatch({
        type: 'FETCH_CLIENTS',
        payload: clients
    }))
    }

}