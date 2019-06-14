import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import { plantReducer } from './reducers'
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
    //    form: formReducer,
        plant: plantReducer
    }),
    applyMiddleware(thunk)
);

export default store;