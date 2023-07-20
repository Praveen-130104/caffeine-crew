import React, { useState } from 'react';
import Section from '../components/section'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Contact from '../components/footer'


function Home(props) {
    

    return (
        <>
            <Navbar cart = {props.cart}/>
            <Hero />
            <Section atpage={'home'} handleClic={props.handleClic} cart={props.cart}/>
            <Contact />
        </>
    );
}
export default Home