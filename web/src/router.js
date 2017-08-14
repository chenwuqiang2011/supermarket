import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import ProductsComponent from './modules/products/ProductsComponent'
import LoginComponent from './modules/login/LoginComponent'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="products" component={ProductsComponent} />
    </Route>
)