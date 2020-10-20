import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import './forgot-password.css';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../actions/userActions';
import { toast, ToastContainer } from 'react-toastify';

/* eslint-disable-next-line */
export interface ForgotPasswordProps { }

export const ForgotPassword = (props: ForgotPasswordProps) => {

  const dispatch = useDispatch()
  const password = useSelector(state => state.password)
  const { loading, userInfo, error } = password
  useEffect(() => {
    if (userInfo) {
      toast.success(userInfo)
    }
  }, [userInfo])
  const submitHandler = (value, resetForm) => {
    const { email } = value
    dispatch(forgotPassword(email))
  }

  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .5 }} exit={{ scale: 0, opacity: 0 }} className='box m-auto shadow-lg p-3 mb-5 bg-white rounded'>
      <ToastContainer />
      <Formik
        initialValues={{ email: "" }}
        onSubmit={submitHandler}
        validationSchema={Yup.object({
          email: Yup.string().required("Email is required").email(),
        })}
      >

        <div className="text-center">
          <Form className='p-4'>
            <h3 className='mb-5'>
              Forgot Password
            </h3>
            <div className="mb-3 col">
              <Field
                name="email"
                type="email"
                className="rounded shadow text-black text-center"
                placeholder="Email"
              />

              <p className='text-danger'><ErrorMessage name="email" />{error && error.email}</p>
            </div>
            <div className="">
              {!loading ? <button
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
                :
                <button className="btn btn-success" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Loading...
                </button>}
            </div>
          </Form>
          <span>Don't have account ? </span>
          <Link to='/registration'>Create Account</Link>
        </div>

      </Formik>
    </motion.div>
  );
};

export default ForgotPassword;
