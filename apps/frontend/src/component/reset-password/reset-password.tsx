import React, { useEffect, useState } from 'react';

import './reset-password.css';
import * as Yup from 'yup'
import { motion } from 'framer-motion';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { resetPass } from '../../actions/userActions'
import { toast, ToastContainer } from 'react-toastify';
/* eslint-disable-next-line */
export interface ResetPasswordProps {

}
const loading = false
export const ResetPassword = ({ match }) => {
  const [resetToken, setResetToken] = useState('')
  const dispatch = useDispatch()
  const password = useSelector(state => state.password)
  const { error, userInfo, loading } = password
  useEffect(() => {
    const token = match.params.token
    if (token) {
      setResetToken(token)
    }
  }, [])
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo)
      toast.success(userInfo)
    }
    if (error) {
      toast.error(error.msg)
    }
  }, [userInfo, error])

  const handleSubmit = (value, resetForm) => {
    const { newPassword } = value
    dispatch(resetPass(newPassword, resetToken))
    resetForm()
  }
  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .5 }} exit={{ scale: 0, opacity: 0 }} className='box'>
      <ToastContainer />
      <Formik
        initialValues={{ newPassword: "", rePassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          newPassword: Yup.string().required("Password is required").min(6),
          rePassword: Yup.string().required("Password is required").min(6).oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
        })}
      >

        <div className="text-center">

          <Form className='p-4'>
            <h3 className='mb-5'>
              Reset Password Form
            </h3>
            {error && error.msg}
            <div className="mb-3 col">
              <Field
                name="newPassword"
                type="password"
                className="rounded shadow text-black text-center"
                placeholder="password"
              />
              <p className='text-danger'><ErrorMessage name="newPassword" /></p>
            </div>
            <div className="mb-3 col">
              <Field
                name="rePassword"
                type="password"
                className="rounded shadow text-black text-center"
                placeholder="rePassword"
              />
              <p className='text-danger'><ErrorMessage name="rePassword" /></p>
            </div>
            <div className="">
              {!loading ? <button
                type="submit"
                className="btn btn-success"
              >
                Change Password
              </button>
                :
                <button className="btn btn-success" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Loading...
                </button>}
            </div>
          </Form>
        </div>

      </Formik>
    </motion.div>
  );
};

export default ResetPassword;
