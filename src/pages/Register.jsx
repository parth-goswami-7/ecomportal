import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SignIn from './SignIn';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = ({openReg, setOpenReg}) => {

  // const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  // const openRegisterModal = () => {
    
  //   setOpen(false);
  //   setIsOpenRegisterModal(true); 
  // };
    const closeRegisterModal = () => {

        setOpenReg(false);
    };
    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
    
        setOpenReg(false);    
        setIsOpenModal(true);
  };
  const formik = useFormik(
    {
      initialValues: {
        name: '',
        email:'',
        password: '',
        cpassword: '',
      }, 
      validationSchema: yup.object({
  
        email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
        name: yup
        .string('Enter your name')
        .required('name is required'),    
        password: yup      
        .string('Enter your password')
        .matches((/^([^0-9]*)$/),"dont't allow Numeric Value")
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required') ,  
        cpassword: yup      
        .string('Enter your confirm password')
        .matches((/^([^0-9]*)$/),"dont't allow Numeric Value")
        .min(8, 'Confirm Password should be of minimum 8 characters length')
        .required('Confirm Password is required') 
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
     }),
    onSubmit: (values) => {
      debugger
      alert(values.name);  
    },
    })
  return (
    
    <Modal open={openReg} onClose={closeRegisterModal} center>  
   
    <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={formik.handleSubmit}>                        
                        <div class="mt-5">
                          <div class="grid gap-y-4">
                            <div>
                              <TextField
                              id="name"
                              name="name"
                              className="block w-full"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              error={formik.touched.name && Boolean(formik.errors.name)}
                              helperText={formik.touched.name && formik.errors.name} 
                              label="Name" 
                              variant="outlined" />              
                            </div>
                            <div>
                            <TextField
                              id="email"
                              name="email"
                              className="block w-full"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={formik.touched.email && Boolean(formik.errors.email)}
                              helperText={formik.touched.email && formik.errors.email} 
                              label="Email" 
                              variant="outlined" /> 
                            </div>  
                            <div>
                            <TextField
                              id="password"
                              name="password"
                              label="Password"
                              type='password'
                              className="block w-full"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              error={formik.touched.password && Boolean(formik.errors.password)}
                              helperText={formik.touched.password && formik.errors.password}/>
                            </div>
                            <div>
                            <TextField
                              id="cpassword"
                              name="cpassword"
                              label="Confirm Password"
                              type='password'
                              className="block w-full"
                              value={formik.values.cpassword}
                              onChange={formik.handleChange}
                              error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
                              helperText={formik.touched.cpassword && formik.errors.cpassword}/>
                              {/* <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                              <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" aria-describedby="email-error" required/>                          
                              </div>
                              <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
                            </div>
                            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                              Sign Up</button>
                          </div>
                        
                </div>
                        {/* <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />
    
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
    
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" /> */}
    
                        {/* <button
                            type="submit" style={{color:"rgb(79 70 229 / var(--tw-text-opacity))", fontWeight:"500"}}
                            class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button> */}
                        </form>
                        {/* <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div> */}
                    </div>
    
                    <div class="text-grey-dark mt-6">
                        Already have an account?  
                        <a href="#" onClick={openModal} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">
                            Sign in
                        </a>
                    </div>
                    <SignIn openSign={isOpenModal} setOpenSign={setIsOpenModal} />
                </div>
            </div>    
            </Modal>
  )
}

export default Register