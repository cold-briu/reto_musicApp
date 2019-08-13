import React, { Component } from 'react';
import Navbar from '../components/NavbarComponent/Navbar';
import Footer from '../components/FooterComponent/Footer';

const Layout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;