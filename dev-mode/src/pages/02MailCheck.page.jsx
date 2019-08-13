import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const MailCheck__container = styled.div`
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

const MailCheck__header = styled.div`
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


const MailCheck = () => {
    return (
        <MailCheck__container>
            <MailCheck__header>
                <div className="MailCheck__header-text center-align">

                    <LandingPage__header_text_h1>
                        CHECK YOUR MAIL
                     </LandingPage__header_text_h1>

                    <p className="mb5" >One last step before you can
                    enjoy a million of songs <br />
                        Please check your email for verification code</p>

                    <div className="row">
                        <div className="col s2"></div>
                        <div className="col s8">
                            <div className="white center-align">
                                <input value="Your code here" id="last_name" type="text" class="validate" />
                            </div>

                            <Link to='/home' className="waves-effect waves-light btn green darken-3 ">
                                Verify Email
                            </Link>

                        </div>
                        <div className="col s2"></div>

                    </div>

                </div>
            </MailCheck__header>
        </MailCheck__container>
    );
}

export default MailCheck