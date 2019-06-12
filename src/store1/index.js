import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import TodoSagas from './sagas'

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(thunk));

// sagaMiddleware.run(TodoSagas)

export default store;

