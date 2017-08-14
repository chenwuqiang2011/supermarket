import login from '../modules/login/LoginReducer'
import add from '../modules/login/AddReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    add,
    router
})

export default rootReducer