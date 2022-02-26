import { createStore, applyMiddleware, compose } from 'redux';
<<<<<<< HEAD
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
=======
import rootReducer from './reducers/';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

>>>>>>> 5f55c9b861e717032550051fef3882a7687b142f
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

export default store;
