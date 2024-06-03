import React from 'react'
import './../styles/PaymentPage.scss'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const PaymentGateway = () => {

  const navigate = useNavigate()

  return (
    <div class="main-payment">
    <h1>Choose a Payment Method</h1>
   <div class="payment">
        <div class="payment-method">
           
          <img src="https://i.ibb.co/vV5Y3X3/gpay.png" alt="GPay"/> Google Pay
        </div>

        <div class="payment-method">
          
         <img src="https://i.ibb.co/8KwhwXm/download-2.png" alt="Paytm"/> Paytm
        </div>

        <div class="payment-method">
            
           <img src="https://i.ibb.co/kMQwswV/credit.jpg" alt="Credit Card"/> Credit Card
        </div>

        <div class="payment-method">
          
     <img src="https://i.ibb.co/9qHGtvQ/debit.jpg" alt="Debit Card"/> Debit Card
        </div>

        <div class="payment-method">
           
<img src="https://i.ibb.co/HNxP3gB/cod.png" alt="Cash on Delivery"/> Cash on Delivery
        </div>

        <div class="payment-method">
           
    <img src="https://i.ibb.co/6YTsQvs/upi.jpg" alt="UPI ID"/> UPI ID
        </div>

        
        
    </div>
    <button type="submit" class="pt-4" onClick={() => navigate(`/ConfimationPage`)}>Proceed to Pay</button>
    </div>
  )
}

export default PaymentGateway