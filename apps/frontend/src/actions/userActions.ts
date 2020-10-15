
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT, CURRENT_USER, CURRENT_USER_SUCCESS, CURRENT_USER_REQUEST, CURRENT_USER_FAIL } from './../constants/userConstants';
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
      payload: error.response&&error.response.data?error.response.data:error.response });
  }  
}
const login = (email, password,history) => async dispatch => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/login", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.msg });
    history.push(`${data.path}`);
   // localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {      
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:error.response&& error.response.data.msg?error.response.data.msg:error.response});
  }  
}

const handleCurrentUser = () => async dispatch => {
   dispatch({ type: CURRENT_USER_REQUEST });
  try {
   const {data} = await axios.get("/api/current_user");
  dispatch({ type: CURRENT_USER_SUCCESS, payload: data })
  } catch (error) {      
    dispatch({
      type: CURRENT_USER_FAIL,
      payload:error.response&& error.response.data.msg?error.response.data.msg:error.response});
  }  
}

const logout = () => (dispatch) => {
  dispatch({ type: USER_SIGNOUT });
};

export {register,login,logout,handleCurrentUser}