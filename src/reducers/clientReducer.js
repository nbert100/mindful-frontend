// this will be responsible for updating the parts of our store that have to do with client
// takes in prevoius state and then action type
// a reducer is a function
//create one big reducer for all actions
// const initialState = {
//   clients: [],
//   provyders: []
// };

export default function clientReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return action.payload;
    case "ADD_CLIENT":
      console.log(action.payload);
      return [...state, action.payload];
    case "ADD_APPOINTMENT_TO_CLIENT":
      //action.payload includes client_id
      //copy prev state
      //find the client that was updated and add the new appointment to their appointments array
      // client = state.find(client => client.id === payload.client_id)
      // client.appointments.push(action.payload)
      return {
        ...state,
        appointments: [...state.appointments, action.payload]
      };
    // case "FETCH_PROVYDERS":
    //   return { provyders: action.payload };
    default:
      return state;
  }
}

// export default function provyderReducer(
//   state = initialState.provyders,
//   action
// ) {
//   switch (action.type) {
//     case "FETCH_PROVYDERS":
//       return { provyders: action.payload };
//     default:
//       return state;
//   }
// }
