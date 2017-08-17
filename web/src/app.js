import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory, browserHistory} from 'react-router'
import routes from './router'

import createStore from './utils/configureStore'

const store = createStore(window.__INITIAL_STATE__, browserHistory)

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)

export default function(store){console.log(233333333,store)}