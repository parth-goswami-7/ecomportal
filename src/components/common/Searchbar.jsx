import React from 'react'
import './../../styles/Searchbar.scss'
import Header from './Header'

const Searchbar = (props) => {

  debugger  
  return (
    
    <div class="flip-card-main">
          
            <div class="flip-card" style={{transform:props.myprops}}>
              
                <div class="front">
                 
                
    
                    <Header/>
                    
                 
                </div>
              
                <div class="back">
                  <input type="text" placeholder="search here"/>
                </div>
            </div>
        </div>
  )
}

export default Searchbar