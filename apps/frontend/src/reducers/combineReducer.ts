import { combineReducers} from 'redux';
import {
    addBookReducer,
    searchBookReducer
} from './bookReducer';
import {
    currentUserReducer,
    passwordReducer,
    userLoginReducer,
    userRegisterReducer
} from './userReducer';

//==========================================================================================================
export default combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userLoginReducer,
    currentUser: currentUserReducer,
    password: passwordReducer,
    addBook: addBookReducer,
    searchBook:searchBookReducer,
})
