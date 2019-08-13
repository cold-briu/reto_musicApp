import React, { Component } from 'react';
import Navbar from '../../components/NavbarComponent/Navbar';
import FormUserInfo from '../../components/FormUserInfoComponent/FormUserInfo';
import Footer from '../../components/FooterComponent/Footer';

import './newUserStyles.css';


class newUser extends Component {

    render() {
        return (
            <>
                <Navbar
                    basic={true}
                />
                <main className="container">


                    <FormUserInfo />


                </main>


            </>
        );
    }
}

export default newUser;