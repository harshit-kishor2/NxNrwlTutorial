import { combineReducers} from 'redux';
import { currentUserReducer, userLoginReducer, userRegisterReducer } from './userReducer';
export default combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userLoginReducer,
    currentUser:currentUserReducer
})