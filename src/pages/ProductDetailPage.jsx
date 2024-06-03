import React, { useContext, useEffect, useState } from 'react'
import './../styles/ProductDetailPage.scss'
import { useParams } from 'react-router-dom'
import navigation from './../data/categoryProduct'
import '@fortawesome/fontawesome-free/css/all.css'; 
import MyContext from './../MyContext'

const ProductDetailPage = () => {

  const [cartitem,setCartitem] = useState([])

    const {setItemToCart, setItemPrice} = useContext(MyContext);
    const{product} = useParams()
    const{productdetails} = useParams()  
    const handleImg = () => {

      document.getElementById('mainImg').src='https://vhx.vercel.app/products/t-shirts/tshirt/tshirt4/tshirt-4-1.png'
    }        
    //console.log('def'+product)
    

    const addToCart = (d) =>{
            
      setItemToCart(prevArray => [...prevArray, d]);        
      //setProductToMatch(product);
      //setItemToCart(d.id);  
      //setItemPrice(prevCount => prevCount + d.price)             
    }

  return (        
    <div class="single-product">
        {
      navigation.categories
      .map((a) => {
        return(                    
          <>
          {
            a.sections
            .map((b) => {
              return(
                <>
                {
                  b.items
                  .filter(abc =>abc.name === product)                  
                  .map((c) => {
                    return(
                      <>
                      {
                        c.products
                        .filter(abcd =>abcd.title === productdetails)                  
                        .map((d) => {
                          return(
                            
                            <>
                            <div class="image">
    
                                <div class="big-img">
                                <img id="mainImg" src={d.thumbnail} alt=""/>
                                </div>

                                <div class="small-img">
                                  {
                                    d.images                                    
                                    .map((e) =>{

                                      return(
                                          <>
                                          <img src={e} alt="" onMouseOver={() => document.getElementById('mainImg').src=e}/>
                                          </>
                                      )
                                    })

                                  }
                                {/* <img src="https://vhx.vercel.app/products/t-shirts/tshirt/tshirt4/tshirt-4-1.png" alt=""/>
                                <img src="https://vhx.vercel.app/products/t-shirts/tshirt/tshirt4/tshirt-4-2.png" alt=""/>
                                <img src="https://vhx.vercel.app/products/t-shirts/tshirt/tshirt4/tshirt-4-3.png" alt="" onMouseOver={handleImg}/> */}
                                </div>
                            </div>
                            <div class="content">

                                <div class="product-title">{d.title}</div>
                                <div class="product-price">
                                <span>{d.price}</span>
                                <span style={{fontSize:"15px",fontWeight:"700"}}>{d.discountPercentage} % discount</span>
                                </div>

                                <p>{d.description}
                                </p>

                                <div class="manu">{d.brand}</div>

                                <div class="size">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                </div>

                                <div class="color">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div class="btn">
                                    <button>buy now</button>
                                    <button onClick={() => addToCart(d)}>add to cart</button>
                                </div>

                                <div class="category">Category: {d.category}</div>

                                    <div class="share">
                                    <span><i class="fa-brands fa-facebook-f"></i></span>
                                    <span><i class="fa-brands fa-whatsapp"></i></span>
                                    <span><i class="fa-brands fa-instagram"></i></span>
                                    </div>
                            </div>
                            </>
                        )
                        })
                      }  
                      </>
                  )
                  })
                }  
                </>
            )
            })
          }           
          </>
        )
      })
    }    
            
          </div>
  )
}

export default ProductDetailPage