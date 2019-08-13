import React, { Component } from 'react';
import SocialMediaLogin from '../components/SocialMediaLogin.component';
import { Link } from 'react-router-dom';



const SocialMediaLoginList = () => {
    return (
        <div className="SocialMediaLoginList__container">

            <ul>
                <li>
                    <Link to="/home">
                        <SocialMediaLogin />
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        <SocialMediaLogin mode="facebook" />
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        <SocialMediaLogin mode="google" />
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        <SocialMediaLogin mode="github" />
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default SocialMediaLoginList