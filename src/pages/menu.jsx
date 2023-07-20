import React from 'react';
import Navbar from '../components/navbar';
import Contact from '../components/footer';

import Section from '../components/section';
import Hero from '../components/hero';
// import Coffee from''
function Menu(props) {
    return(
        <>
            <Navbar cart = {props.cart}/>
            <Hero/>
            <Section atpage={'menu'} cart={props.cart} handleClic = {props.handleClic}/>
            <Contact/>
        </>
    );
}
export default Menu;