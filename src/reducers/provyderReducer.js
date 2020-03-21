export default function provyderReducer(state = {provyders: []}, action) {

    switch(action.type) {
        case 'FETCH_PROVYDERS':
            return {provyders: action.payload}
        default:
            return state
    }
}