import React, { useStateCotext } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import  {useStateContext}  from "/Users/olayinka/Desktop/ecommerce/clacha/context/StateContext.js";
import { Cart } from './';



const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  

 
 

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ClachaShop</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar