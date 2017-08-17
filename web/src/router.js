import React from 'react'
import {Route, IndexRoute} from 'react-router'
import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import AddComponent from './modules/login/AddComponent';
import Operator from './modules/operator_interface/OperatorComponent';
import PostComponent from './modules/operator_interface/PostComponent';
import ProductsComponent from './modules/products/ProductsComponent';
import SupplierComponent from './modules/supplier/SupplierComponent';
import AddProductComponent from './modules/addproduct/AddProductComponent';
import SearchComponent from './modules/search/SearchComponent';
import CollectMoney from './modules/shouyin/shouyinComponnet';
import pucharseComponent from './modules/purcharse/pucharseComponent';

function loginFilter(){
	
	
}

export default [
	

    <Route path="/" component={Operator}>
    	<IndexRoute component={LoginComponent}/>
    	<Route path="login" component={LoginComponent} />
    	<Route path="add" component={AddComponent}  onEnter={loginFilter} />
    	<Route path="app" component={AppComponent}  onEnter={loginFilter}/>
        <Route path='purcharse' component={pucharseComponent}  onEnter={loginFilter}/>
    	<Route path="products" component={ProductsComponent}  onEnter={loginFilter}/>
    	<Route path="suppliers" component={SupplierComponent}  onEnter={loginFilter}/>
    	<Route path="addproduct" component={AddProductComponent}  onEnter={loginFilter}/>
        <Route path="searchProduct" component={SearchComponent}  onEnter={loginFilter}/>
    	<Route path="post_login" component={PostComponent}  onEnter={loginFilter}/>
    </Route>,
	<Route path="collectMoney" component={CollectMoney} />
]



