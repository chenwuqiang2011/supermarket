import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import Operator from './modules/operator_interface/OperatorComponent';
import ProductsComponent from './modules/products/ProductsComponent';
import SupplierComponent from './modules/supplier/SupplierComponent';
import AddProductComponent from './modules/addproduct/AddProductComponent';
import SearchComponent from './modules/search/SearchComponent';

export default (
    <Route path="/" component={Operator}>
    	<Route path="login" component={LoginComponent} />
    	<Route path="app" component={AppComponent} />
    	<Route path="products" component={ProductsComponent} />
    	<Route path="suppliers" component={SupplierComponent} />
    	<Route path="addproduct" component={AddProductComponent} />
    	<Route path="searchProduct" component={SearchComponent} />
    </Route>

)