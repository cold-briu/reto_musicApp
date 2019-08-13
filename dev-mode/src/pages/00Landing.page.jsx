import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const LandingPage__container = styled.div`
position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;

    background-image: url('https://jmd.im/wp-content/uploads/2017/06/blackii_thumbnail.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto auto;
    color: white;
`;

const LandingPage__header = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 3%;
`;

const LandingPage__header_text_h1 = styled.h1`
    margin-bottom: 0;
    font-weight: 100;
    font-family: 'Josefin Sans', sans-serif;
`;


const LandingPage = () => {
    return (
        <LandingPage__container>
            <LandingPage__header>
                <div className="LandingPage__header-text center-align">

                    <LandingPage__header_text_h1>
                        PREMIUM <strong>MUSIC</strong>APP
                     </LandingPage__header_text_h1>

                    <p className="mb5" >Listen to +1.000.000 songs, follow your
                        favorite artists, share with your friends.</p>

                    <div className="row">
                        <Link to='/newUser' className="waves-effect waves-light btn pink darken-3 col s4 offset-s1">
                            Get trial 30 days
                        </Link>
                        <Link to='/login' className="waves-effect waves-light btn deep-purple darken-3 col s4 offset-s2">
                            Login now
                        </Link>
                    </div>

                </div>
            </LandingPage__header>
        </LandingPage__container>
    );
}

export default LandingPage