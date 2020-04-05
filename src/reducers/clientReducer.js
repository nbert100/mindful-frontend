// this will be responsible for updating the parts of our store that have to do with client
// takes in prevoius state and then action type
// a reducer is a function

export default function clientReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return action.payload;
    case "ADD_CLIENT":
      return [...state, action.payload];
    case "ADD_APPOINTMENT_TO_CLIENT":
      let updatedState = [...state];
      let client = updatedState.find(
        (client) => client.id === action.payload.client_id
      );
      client.appointments = [...client.appointments, action.payload];
      return updatedState;

    case "REMOVE_APPOINTMENT":
      let newState = [...state];
      let appClient = newState.find(
        (client) => client.id === action.payload.client_id
      );
      appClient.appointments = appClient.appointments.filter(
        (appointment) => appointment.id !== action.payload.id
      );
      return newState;
    default:
      return state;
  }
}
