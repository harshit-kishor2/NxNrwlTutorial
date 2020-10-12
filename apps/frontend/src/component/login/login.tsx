import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link, useHistory } from 'react-router-dom'
import * as Yup from "yup"
import './login.css';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/userActions';
/* eslint-disable-next-line */
export interface LoginProps { }

export const Login = (props: LoginProps) => {
  const history = useHistory()
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch()
  const redirect = '/'
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo])

  const loginHandler = (value, { resetForm }) => {
    const { email, password } = value
    dispatch(login(email, password))
  }
  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .5 }} exit={{ scale: 0, opacity: 0 }} className='box m-auto shadow-lg p-3 mb-5 bg-white rounded'>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={loginHandler}
        validationSchema={Yup.object({
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
      >

        <div className="text-center">
          <Form className='p-4'>
            <h3 className='mb-5'>
              Login
            </h3>
            {error && <div className='text-danger'>{error.status} ! Please check credentials..</div>}
            <div className="mb-3 col">
              <Field
                name="email"
                type="email"
                className="rounded shadow text-black text-center"
                placeholder="Email"

              />
              <p className='text-danger'><ErrorMessage name="email" />{error && error.email}</p>
            </div>
            <div className="mb-3 col">
              <Field
                name="password"
                type="password"
                className="rounded shadow text-black text-center"
                placeholder="password"
              />
              <p className='text-danger'><ErrorMessage name="password" />{error && error.password}</p>
            </div>
            <div className="">
              {!loading ? <button
                type="submit"
                className="btn btn-success"
              >
                SignUp
              </button>
                :
                <button className="btn btn-success" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Loading...
                </button>}
              <p><i><Link to='/forgot-password'>Forgot Password..?</Link></i></p>
            </div>
          </Form>
          <span>Don't have account ? </span>
          <Link to='/registration'>Create Account</Link>
        </div>

      </Formik>
    </motion.div>
  );
};

export default Login;
