import React, { Component } from 'react';
import styled from 'styled-components';

import FixedNavbar from '../components/FixedNavbar.component';
import FloatButton from '../components/FloatButton.component';

import Player from '../containers/Player.container';


const Navbar__container = styled.div`
min-height:60vh;
z-index:1;
`;





const Navbar = (props) => {
    return (
        <>
            <FixedNavbar />

            <Navbar__container>
                {props.children}
            </Navbar__container>

            <FloatButton />
            <Player />
        </>
    )
}
export default Navbar