import { combineReducers} from 'redux';
import {
    addBookReducer,
    searchBookReducer,
    searchBookByIDReducer
} from './bookReducer';
import {
    issueBookByIDReducer,
    issueBookReducer
} from './issueBookReducer';
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
    searchBook: searchBookReducer,
    bookById: searchBookByIDReducer,
    issueBook: issueBookReducer,
    issueBookListById:issueBookByIDReducer
})
