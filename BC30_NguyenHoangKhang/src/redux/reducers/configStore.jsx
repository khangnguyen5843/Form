// This fife's name also has rootReducers meaning

import {combineReducers, createStore} from 'redux';
import { QLSVReducer } from './QLSVReducer'; 

const rootReducer = combineReducers({
    // Contain reducers for sub-stores
    QLSVReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());