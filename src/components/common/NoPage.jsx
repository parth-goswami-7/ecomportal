import React from 'react'
import './../../styles/NoPage.scss'
import { useNavigate } from 'react-router-dom';

const NoPage = () => {

    const nav = useNavigate()
    const redirectToPage = () => {        
        nav('/');
      };
  return (
    
    <div class="no-main">
    
  <div class="content">
   <h1>You are in wrong page</h1>
   <button onClick={redirectToPage}>Go To Home</button>
</div>

<div class="image">
   <img src="https://i.ibb.co/bLKYjJ1/page-not-found-404-error-concept-illustration-free-vector.jpg" alt=""/>
   </div>
  


</div>
  )
}

export default NoPage