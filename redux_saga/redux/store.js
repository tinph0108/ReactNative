// redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import jobReducer from './reducers/jobReducer';
import { watchJobSaga } from './sagas/jobSaga';

const rootReducer = combineReducers({ job: jobReducer });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Khởi động Saga middleware
sagaMiddleware.run(watchJobSaga);

export default store;
