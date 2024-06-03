import React, { useContext, useEffect, useState } from 'react'
import './../styles/ConfirmationPage.scss'
import MyContext from './../MyContext'

const ConfimationPage = () => {

  const {subTotal, setSubTotal, itemToCart, setItemToCart, isCartOpen, setIsCartOpen, setShipAddress, shipAddress} = useContext(MyContext); 

  return (
    <div class="checkout-layout">
      <div class="form">
        <div class="order">
          <img src="https://i.ibb.co/FwbHGFk/green.png" alt=""/>
          <h3>Your Order Has Been Confirmed</h3>      
        </div>
      </div>
      <div class="payment">
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
            <div>            
            <h3>Your Items deliver to this address : </h3>
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
                                  
                                </div>
      </div>

            </div> 
            
    </div>
  )
}

export default ConfimationPage