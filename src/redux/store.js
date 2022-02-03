import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// allows a browser to cash our store
import {persistStore} from 'redux-persist'; 

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of our store
export const persistor = persistStore(store);
