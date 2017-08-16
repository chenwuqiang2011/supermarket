import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'
import products from '../modules/products/ProductsReducer'
import supplier from '../modules/supplier/SupplierReducer'
import searchProduct from '../modules/search/SearchReducer'

const rootReducer = combineReducers({
    login,
    router,
    products,
    supplier,
    searchProduct

})

export default rootReducer