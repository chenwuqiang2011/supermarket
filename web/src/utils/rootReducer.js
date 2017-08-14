import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'
import products from '../modules/products/ProductsReducer'

const rootReducer = combineReducers({
    login,
    router,
    products
})

export default rootReducer