import { combineReducers} from 'redux';
import { userLoginReducer, userRegisterReducer } from './userReducer';
export default combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userLoginReducer
})