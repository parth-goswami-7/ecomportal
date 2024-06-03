import React from 'react'
import {CirclesWithBar, FidgetSpinner} from 'react-loader-spinner'
import './../../styles/Loader.scss'

const Loader = () => {
  return (
    
    <>    
    <div class="overlay">   
    <FidgetSpinner
    visible={true}
    backgroundColor='#1B5299'
    height="80"
    width="80"
    ariaLabel="fidget-spinner-loading"
    wrapperStyle={{}}
    wrapperClass="fidget-spinner-wrapper"
    />
    {/* <CirclesWithBar
      height="100"
      width="100"
      color="#4fa94d"
      outerCircleColor="#4fa94d"
      innerCircleColor="#4fa94d"
      barColor="#4fa94d"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />      */}
      </div> 
    </>
  )
}

export default Loader