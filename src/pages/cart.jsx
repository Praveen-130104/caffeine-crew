import React from 'react';
import Navbar from '../components/navbar';
import CartContent from '../components/cart-cont';
import Contact from '../components/footer';
function Carti(props) {
    return (
      <>
        <Navbar cart={props.cart} />
        <CartContent cart={props.cart} setCart={props.setCart} />
        <Contact />
      </>
    );
  }
export default Carti