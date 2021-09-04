import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Error404 from '../Error404';

const Error=()=>{
    return(
        <>
        <Navbar/>
        <Error404/>
        <Footer/>
        </>
    )
}

export default Error;