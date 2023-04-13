import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';    //Para trabajo asincrono
import reducer from '../reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;