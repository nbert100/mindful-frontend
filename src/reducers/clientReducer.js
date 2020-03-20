// this will be responsible for updating the parts of our store that have to do with client
// takes in prevoius state and then action type
// a reducer is a function

export default function clientReducer(state = {clients: []}, action) {
// where does action come from
debugger
    switch(action.type) {
        case 'FETCH_CLIENTS':
            return {clients: action.payload}
        case 'ADD_CLIENT':
            return {...state, clients: [...state.clients, action.payload]}
        case 'ADD_PROVYDER':
            
            // let client = props.clients.filter(client => client.id == props.match.params.id)[0]
            return {}
        default:
            return state     
    }
        
}