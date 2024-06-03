import React, { useContext, useEffect, useState } from 'react'
import './../styles/Checkout.scss'
import MyContext from './../MyContext'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Modal } from 'react-responsive-modal';
import PaymentGateway  from './../pages/PaymentGateway'

function Checkout() {


const {subTotal, setSubTotal, itemToCart, setItemToCart, isCartOpen, setIsCartOpen, setShipAddress, shipAddress} = useContext(MyContext); 
const [isVisible, setIsVisible] = useState(false);
const navigate = useNavigate()
const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };
  

const removeItem = (indexToRemove) => {

    setItemToCart(prevArray => prevArray.filter((item, index) => index !== indexToRemove));   
  }  
  useEffect(() => {

    setTimeout(() => {

      setIsCartOpen(false)

    }, 1000)
  }, []);
  const formik = useFormik(
    {
      initialValues: {
        // name: '',
        // email:'',
        // phoneNo: '',
        // message: ''
      }, 
      validationSchema: yup.object({
  
        // email: yup
        // .string('Enter your email')
        // .email('Enter a valid email')
        // .required('Email is required'),
        // name: yup
        // .string('Enter your name')
        // .required('name is required'),    
        // phoneNo: yup
        // .string('Enter your phone No.')
        // .matches((/^([^a-zA-Z]*)$/),"Only Numeric value allow")
        // .min(10, 'Phone No. should be 10 digits only')      
        // .max(10, 'Phone No. should be 10 digits only')      
        // .required('phone No. is required'),    
        // message: yup
        // .string('Enter your message')
        // .required('message is required'),    
     }),
    onSubmit: (values) => {
      debugger
      //onsole.log(values)      
      // alert('Name='+values.name+
      //   'Mobile='+values.phoneNo+
      //   'Add='+values.address+
      //   'City='+values.cname+
      //   'State='+values.State+
      //   'Pin='+values.Pincode
      // );  
      setShipAddress(values);
      document.getElementById('shipDiv1').style.display = 'none';
      document.getElementById('shipDiv2').style.display = 'none';
      setIsVisible(true);
      // pdf code
      // const doc = new jsPDF();
      
      // doc.text(`Name: ${values.name}`, 10, 10);
      // doc.text(`Email ID: ${values.email}`, 10, 20);
      // doc.text(`Phone No.: ${values.phoneNo}`, 10, 30);
      // doc.text(`Message: ${values.message}`, 10, 40);
      
      // doc.save("a4.pdf");
    },
    })
  return (
    
    <div class="checkout-layout">    
        <div class="main-modal">            
            {isOpen1 && <div class="modal">
                <div class="modal-content">
                    <span class="close" onClick={closeModal1}>&times;</span>
                    <PaymentGateway/>
                </div>
            </div>}
        </div>   
        <div class="form" style={{marginTop:"10px"}}>        
          <div className="mt-8">                        
                        <div>                            
                            <form onSubmit={formik.handleSubmit} style={{margin:"15px"}}>
                                {/* className="mx-auto mt-16 max-w-xl sm:mt-20"  */}
                                <h3 style={{fontSize: "24px",fontWeight: "700", marginBottom: "10px"}}>Shipping Address</h3>                                
                                <div id="shipDiv1" className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                  <div className="sm:col-span-2">
                                    <TextField
                                      id="name"
                                      name="name"
                                      className="block w-full"
                                      placeholder='Enter Your Name'
                                      value={formik.values.name}
                                      onChange={formik.handleChange}
                                      error={formik.touched.name && Boolean(formik.errors.name)}
                                      helperText={formik.touched.name && formik.errors.name} 
                                      label="Full Name" 
                                      variant="outlined" />              
                                  </div>
                                  <div className="sm:col-span-2">
                                    <TextField
                                      id="phoneNo"
                                      name="phoneNo"
                                      className="block w-full"
                                      placeholder='Enter Your Phone No.'
                                      value={formik.values.phoneNo}
                                      onChange={formik.handleChange}
                                      error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                                      helperText={formik.touched.phoneNo && formik.errors.phoneNo} 
                                      label="Phone No." 
                                      variant="outlined" />             
                                  </div> 
                                  <div className="sm:col-span-2">
                                    <TextField style={{width:"100%"}}
                                    id="address"
                                    name="address"
                                    label="Address"            
                                    multiline
                                    rows={4}   
                                    value={formik.values.address}   
                                    onChange={formik.handleChange}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}       
                                    />
                                  </div>
                                  <div className="sm:col-span-2">
                                    <TextField
                                      id="cname"
                                      name="cname"
                                      className="block w-full"
                                      placeholder='Enter Your City'
                                      value={formik.values.cname}
                                      onChange={formik.handleChange}
                                      error={formik.touched.cname && Boolean(formik.errors.cname)}
                                      helperText={formik.touched.cname && formik.errors.cname} 
                                      label="City" 
                                      variant="outlined" />              
                                  </div>                             
                                  <div className="sm:col-span-2">
                                    <TextField
                                      id="State"
                                      name="State"
                                      className="block w-full"
                                      placeholder='Enter Your State'
                                      value={formik.values.State}
                                      onChange={formik.handleChange}
                                      error={formik.touched.State && Boolean(formik.errors.State)}
                                      helperText={formik.touched.State && formik.errors.State} 
                                      label="State" 
                                      variant="outlined" />             
                                  </div>
                                  <div className="sm:col-span-2">
                                    <TextField
                                      id="Pincode"
                                      name="Pincode"
                                      className="block w-full"
                                      placeholder='Enter Your Pincode'
                                      value={formik.values.Pincode}
                                      onChange={formik.handleChange}
                                      error={formik.touched.Pincode && Boolean(formik.errors.Pincode)}
                                      helperText={formik.touched.Pincode && formik.errors.Pincode} 
                                      label="Pincode" 
                                      variant="outlined" />             
                                  </div>
                                  
                                </div>
                                <div id="shipDiv2" className="mt-10">                    
                                  <Button className="block w-full" variant="contained" type='submit'>Save</Button>
                                </div>
                                {isVisible && (
                                <div>
                                  <table className='stable'>
                                    <tr>
                                      <th>Full Name : </th><td class="pl-2">{shipAddress.name}</td>                                                                            
                                    </tr>
                                    <tr>
                                      <th>Phone No. : </th><td class="pl-2">{shipAddress.phoneNo}</td>                                                                            
                                    </tr>
                                    <tr>
                                      <th>Address : </th><td class="pl-2">{shipAddress.address}</td>                                                                            
                                    </tr>
                                    <tr>
                                      <th>City : </th><td class="pl-2">{shipAddress.cname}</td>                                                                            
                                    </tr>
                                    <tr>
                                      <th>State : </th><td class="pl-2">{shipAddress.State}</td>                                                                            
                                    </tr>
                                    <tr>
                                      <th>Pincode : </th><td class="pl-2">{shipAddress.Pincode}</td>                                      
                                    </tr>
                                    <tr>
                                      <td>                                        
                                      </td>
                                    </tr>
                                  </table>
                                  <Button   className="block w-full" variant="contained" type='button' onClick={openModal1}>Place Your Order</Button>
                                  {/* <button class="button">
                                    <span class="button-content">Open</span>
                                  </button> */}
                                </div>)}                                                            
                            </form>
                        </div>                        
          </div>
          <div>          
        </div>                      
        </div>
        
        <div class="checkout">        
        <h3>Your Items</h3>
        <div className="flow-root mt-2" style={{overflow:"auto"}}>
                          <ul role="list" className="-my-6 divide-y divide-gray-200">  
                          {itemToCart.map((product, index) => (
                              <li key={product.id} className="flex py-6 px-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.thumbnail}
                                    alt={product.thumbnail}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a style={{fontSize:"15px"}} href={product.thumbnail}>{product.title}</a>
                                      </h3>
                                      <p className="ml-4" style={{fontSize:"15px"}}>{product.itemtotal != null ? product.itemtotal : product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                         

                                        <p className="text-gray-900 pl-2 pr-2">
                                          Qty: {product.quantity != null ? product.quantity : 1}
                                        </p>

                                        
                                    </div>

                                    {/* <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => removeItem(index)}
                                      >
                                        Remove
                                      </button>
                                    </div> */}
                                  </div>
                                </div>
                              </li>
                            ))}                          
                          </ul>                          
                        </div>
            <hr class="mt-4"/>            
            <h3>Summary</h3>

            <div class="inner">
            <div class="price">
            <span>Total Price:</span>
            <span>{subTotal}</span>
            </div>

            <div class="price">
            <span>tax:</span>
            <span>0</span>
            </div>

            <div class="price">
            <span>discount:</span>
            <span>0</span>
            </div>

            <div class="price">
            <span>Total Price:</span>
            <span>{subTotal}</span>
            </div>

            {/* <div class="price">
            <input type="text" placeholder="promo code"/>
            <button>Apply</button>
            </div> */}
            </div>


            </div>
        
    </div>
  )
}

export default Checkout