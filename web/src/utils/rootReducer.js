import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'
import cashier from '../modules/shouyin/shouyinReducer'

const rootReducer = combineReducers({
    login,
    router,
    cashier
})

export default rootReducer