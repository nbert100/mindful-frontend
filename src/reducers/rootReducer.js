import clientReducer from './clientReducer'
import provyderReducer from './provyderReducer'

const rootReducer = combineReducers({
    clients: clientReducer,
    provyders: provyderReducer
})

export default rootReducer;