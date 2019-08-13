import React, { Component } from 'react';
import styled from 'styled-components'

import SocialMediaLoginList from '../containers/SociaMedialLoginList.container';

const Login__container = styled.div`
   min-height: 80vh;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 3%;
    `;

const Login__header_text_h2 = styled.h2`
    text-align: center;
    margin-top:10%;
    font-weight: 300;
    font-family: 'Josefin Sans', sans-serif;
`;



const Login = () => {
    return (
        <>
            <Login__header_text_h2>Login Page</Login__header_text_h2>

            <Login__container>

                <SocialMediaLoginList />

            </Login__container>
        </>
    )
}

export default Login