import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import Operator from './modules/operator_interface/OperatorComponent';
import CollectMoney from './modules/shouyin/shouyinComponnet';

export default [

    <Route path="/" component={Operator}>
    	<Route path="login" component={LoginComponent} />
    	<Route path="app" component={AppComponent} />
    </Route>,
	<Route path="collectMoney" component={CollectMoney} />
]