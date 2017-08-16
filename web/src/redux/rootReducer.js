import login from '../modules/login/LoginReducer'
import products from '../modules/products/ProductsReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    products
})

export default rootReducer