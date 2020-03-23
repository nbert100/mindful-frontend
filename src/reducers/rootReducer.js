import clientReducer from './clientReducer'
import provyderReducer from './provyderReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    clients: clientReducer,
    provyders: provyderReducer
})

export default rootReducer;