import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from './../constants/userConstants';
import axios from 'axios'

const register = (name, email, password,rePassword,history) =>async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password, rePassword } });
  try {
    const {data} = await axios.post("/api/register", { name, email, password, rePassword });
    console.log(data)
    if (data.status == 200) {
     dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      history.push('/login');
    } else {
      dispatch({ type: USER_REGISTER_FAIL, payload: data});
   }  
   // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {      
    dispatch({ type: USER_REGISTER_FAIL, payload: error });
  }  
}  

const login = (email, password) => async dispatch => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const {data} = await axios.post("/api/login", { email, password});
   if (data.status == 200) {
     dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
     // history.push('/login');
    } else {
      dispatch({ type: USER_SIGNIN_FAIL, payload: data});
   }
   // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {      
    dispatch({ type: USER_SIGNIN_FAIL, payload: error});
  }  
}

export {register,login}