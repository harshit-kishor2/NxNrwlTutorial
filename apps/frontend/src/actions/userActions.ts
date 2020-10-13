
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT } from './../constants/userConstants';
import axios from 'axios'

const register = (name, email, password,rePassword,history) =>async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password, rePassword } });
  try {
    const {data} = await axios.post("/api/register", { name, email, password, rePassword });  
     dispatch({ type: USER_REGISTER_SUCCESS, payload:data });
      history.push('/login');
   // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) { 
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,});
  }  
}  

const login = (email, password) => async dispatch => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const {data} = await axios.post("/api/login", { email, password});
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
   // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {      
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,});
  }  
}

const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
};

export {register,login,logout}