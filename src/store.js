import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/user.js';
// import currentUser from './reducers/currentUser.js';
// import loginForm from './reducers/loginForm.js';
// import signUpForm from './reducers/signupForm.js';

const reducer = combineReducers({
    users: usersReducer,
    // currentUser, 
    // loginForm,  
    // signUpForm,  
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store