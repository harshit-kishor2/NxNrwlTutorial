import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link, useHistory } from 'react-router-dom'
import * as Yup from "yup"
import './registartion.css';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/userActions';
export interface RegistartionProps { }

export const Registartion = (props: RegistartionProps) => {
  const history = useHistory()
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo])

  const handleSubmit = (value, { resetForm }) => {
    const { name, email, password, rePassword } = value
    dispatch(register(name, email, password, rePassword, history));
    resetForm();
  }
  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .5 }} exit={{ scale: 0, opacity: 0 }} className='box m-auto shadow-lg p-3 mb-5 bg-white rounded'>
      <Formik
        initialValues={{ name: "", email: "", password: "", rePassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().required("Email is required").email(),
          password: Yup.string().required("Password is required").min(6),
          rePassword: Yup.string().required("Password is required").min(6).oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
      >

        <div className="text-center">

          <Form className='p-4'>
            <h3 className='mb-5'>
              Registration Form
            </h3>
            {error && <div className='text-danger'>{error.status} Please fill all fields correctly</div>}
            <div className="col mb-3">
              <Field
                name="name"
                type="text"
                className="rounded shadow text-black text-center"
                placeholder="name"
              />
              <p className='text-danger'><ErrorMessage name="name" /></p>
            </div>
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
              <p className='text-danger'><ErrorMessage name="password" /></p>
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
                SignUp
              </button>
                :
                <button className="btn btn-success" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Loading...
                </button>}
            </div>
          </Form>
          <span>Already have account? </span>
          <Link to='/login'>Login</Link>
        </div>

      </Formik>
    </motion.div>
  );
};

export default Registartion;
