import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
//import Data from "../Json/Json"

const MyContextProvider = ({children}) => {

// const HeadingText = "Popular"
// const HeadingText1 = "Related Products"

const [itemToCart, setItemToCart] = useState([]);
const [shipAddress, setShipAddress] = useState({});
const [subTotal, setSubTotal] = useState(0);
const[isCartOpen, setIsCartOpen] = useState(false)

return (
<MyContext.Provider value={{itemToCart,setItemToCart,subTotal, setSubTotal, isCartOpen, setIsCartOpen, shipAddress, setShipAddress}} >
    {/* value={{HeadingText,HeadingText1}}  setProductToMatch*/}
{children}
</MyContext.Provider>
)
}

export default MyContextProvider