import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import Register from './Register';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const SignIn = ({openSign, setOpenSign}) => {
//export default function SignIn({open,setOpen}) {
    
  const [isOpenFPModal, setIsOpenFPModal] = useState(false);
  const openFPModal = () => {
    
    setOpenSign(false);
    setIsOpenFPModal(true);
  };
  const closeFPModal = () => {

    setIsOpenFPModal(false);
  };
  const closeModal = () => {

    setOpenSign(false);
  };   
  const openSignInModal = () => {
    
    setOpenSign(true);
    setIsOpenFPModal(false);
  };
  const formikForgot = useFormik(
    {
      initialValues: {
        email:'',
        password: '',
        cpassword: '',
      }, 
      validationSchema: yup.object({
  
        email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),                   
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
     }),
    onSubmit: (values) => {
      debugger
      alert(values.name);  
    },
    })
  const formikSign = useFormik(
    {
      initialValues: {
        email:'',
        password: '',        
      }, 
      validationSchema: yup.object({
  
        email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
        password: yup      
        .string('Enter your password')
        .matches((/^([^0-9]*)$/),"dont't allow Numeric Value")
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required') ,          
     }),
    onSubmit: (values) => {
      debugger
      alert(values.name);  
    },
    })
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <Modal open={isOpenFPModal} onClose={closeFPModal} center>    
        
        <main id="content" role="main" class="w-full max-w-md mx-auto p-6">
            <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div class="p-4 sm:p-7">
                <div class="text-center">
                  <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Remember your password? 
                    <a class="text-blue-600 decoration-2 hover:underline font-medium ml-2" href="#" onClick={openSignInModal}>
                      Login here
                    </a>
                  </p>
                </div>

                <div class="mt-5">
                  <form onSubmit={formikForgot.handleSubmit}>
                    <div class="grid gap-y-4">
                      <div>
                      <TextField style={{paddingRight: "10px"}}
                        id="email"
                        name="email"
                        className="block w-full"
                        value={formikForgot.values.email}
                        onChange={formikForgot.handleChange}
                        error={formikForgot.touched.email && Boolean(formikForgot.errors.email)}
                        helperText={formikForgot.touched.email && formikForgot.errors.email} 
                        label="Email" 
                        variant="outlined" /> 
                      </div>  
                      <div>
                      <TextField style={{paddingRight: "10px"}}
                        id="password"
                        name="password"
                        label="Password"
                        type='password'
                        className="block w-full"
                        value={formikForgot.values.password}
                        onChange={formikForgot.handleChange}
                        error={formikForgot.touched.password && Boolean(formikForgot.errors.password)}
                        helperText={formikForgot.touched.password && formikForgot.errors.password}/>
                      </div>
                      <div>
                      <TextField style={{paddingRight: "10px"}}
                        id="cpassword"
                        name="cpassword"
                        label="Confirm Password"
                        type='password'
                        className="block w-full"
                        value={formikForgot.values.cpassword}
                        onChange={formikForgot.handleChange}
                        error={formikForgot.touched.cpassword && Boolean(formikForgot.errors.cpassword)}
                        helperText={formikForgot.touched.cpassword && formikForgot.errors.cpassword}/>
                        {/* <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                        <div class="relative">
                          <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" aria-describedby="email-error" required/>                          
                        </div>
                        <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
                      </div>
                      <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
              <a class="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#" target="_blank">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View Github
              </a>
              <a class="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#">
                
                Contact us!
              </a>
            </p> */}
          </main>              
        </Modal>
        <Modal open={openSign} onClose={closeModal} center>                  

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={formikSign.handleSubmit}>
              <div>
                {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label> */}
                <div className="mt-2">
                <TextField
                  id="email"
                  name="email"
                  className="block w-full"
                  value={formikSign.values.email}
                  onChange={formikSign.handleChange}
                  error={formikSign.touched.email && Boolean(formikSign.errors.email)}
                  helperText={formikSign.touched.email && formikSign.errors.email} 
                  label="Email" 
                  variant="outlined" />    
                  {/* <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  /> */}
                </div>
              </div>  
              <div>
              <TextField
                id="password"
                name="password"
                className="block w-full"
                label="Password"
                type='password'
                value={formikSign.values.password}
                onChange={formikSign.handleChange}
                error={formikSign.touched.password && Boolean(formikSign.errors.password)}
                helperText={formikSign.touched.password && formikSign.errors.password}/>
                {/* <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" onClick={openFPModal} className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div> */}
                {/* <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div> */}
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between">                  
                  <div className="text-sm">
                    <a href="#" onClick={openFPModal} className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
            </div>
            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" onClick={openRegisterModal} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Create Account
              </a>
            </p>*/}
          </div>
        </div>
        {/* {<Register open={isOpenRegisterModal} setOpenReg={setIsOpenRegisterModal} />} */}
        </Modal>
      </>
    )
  }
  export default SignIn