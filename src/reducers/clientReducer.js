// this will be responsible for updating the parts of our store that have to do with client
// takes in prevoius state and then action type
// a reducer is a function

export default function clientReducer(state = {clients: []}, action) {
// where does action come from
    switch(action.type) {
        case 'FETCH_CLIENTS':
            return {clients: action.payload}
        case 'ADD_CLIENT':
            return {...state, clients: [...state.clients, action.payload]}
        default:
            return state     
    }
        
}