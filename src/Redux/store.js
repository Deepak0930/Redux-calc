import { createStore } from 'redux';
import { calcReducer } from './reducer';

export const store = createStore(calcReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

