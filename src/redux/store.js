import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducer';

const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(
    reducer,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
