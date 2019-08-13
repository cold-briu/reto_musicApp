import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Main.layout';





const Home = () => {



    return (
        <>
            <Navbar>
                <h5>H O M E</h5>
                <Link to="/">
                    <button>Return</button>
                </Link>


            </Navbar>

        </>
    )
}

export default Home