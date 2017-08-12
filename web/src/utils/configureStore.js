import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer'
import {ajaxMiddleware} from './ajaxMiddleware'


export default function configureStore(initialState = {}, history){
    let middleware = applyMiddleware(thunk, ajaxMiddleware, routerMiddleware(history))

    const store = createStore(rootReducer, initialState, middleware)

    // if (module.hot) {
    //     module.hot.accept('./rootReducer', () => {
    //         const nextRootReducer = require('./rootReducer');            
    //         store.replaceReducer(nextRootReducer)
    //     })
    // }

    return store;
}