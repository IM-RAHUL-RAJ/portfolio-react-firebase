import React from 'react';
import Navbar from './Navbar';
import "./index.css";
import Header from './Header';
import OurWork from './OurWork';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Homepage=()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <OurWork/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
        </>
    )
}


export default Homepage;
