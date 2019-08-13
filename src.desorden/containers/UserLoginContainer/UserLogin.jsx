import React, { Component } from 'react';
import Navbar from '../../components/NavbarComponent/Navbar';
import Header from '../../components/HeaderComponent/Header';
import Statusbar from '../../components/StatusbarComponent/Statusbar';
import UserInfoPreview from '../../components/UserInfoPreview';
import FormUserInfo from '../../components/FormUserInfoComponent/FormUserInfo';
import Footer from '../../components/FooterComponent/Footer';


class UserLogin extends Component {

    render() {
        return (
            <>
                <main className="container">

                    <FormUserInfo />



                </main>
            </>
        );
    }
}

export default UserLogin;