// import React from 'react';
import Navbar from '../components/navbar';
import AboutStory from '../components/about-story';
import Hero from '../components/hero';
import Contact from '../components/footer'
function About(props)
{
    return(
        <>
        <Navbar cart={props.cart}/>
        <Hero/>
        <AboutStory/>
        <Contact/>
        </>
    )
}
export default About