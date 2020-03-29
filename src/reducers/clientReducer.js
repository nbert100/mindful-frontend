// this will be responsible for updating the parts of our store that have to do with client
// takes in prevoius state and then action type
// a reducer is a function
//create one big reducer for all actions

export default function clientReducer(state = { clients: [] }, action) {
  // where does action come from

  switch (action.type) {
    case "FETCH_CLIENTS":
      return { clients: action.payload };
    case "ADD_CLIENT":
      console.log(action.payload);
      return { ...state, clients: [...state.clients, action.payload] };
    case "ADD_APPOINTMENT":
      return {
        ...state,
        appointments: [...state.appointments, action.payload]
      };
    default:
      return state;
  }
}
