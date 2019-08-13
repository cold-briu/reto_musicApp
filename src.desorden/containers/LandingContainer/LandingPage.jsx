import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageStyles.css';

function LandingPage() {
    return (
        <div className="LandingPage__container">
            <header className="LandingPage__header">
                <div className="LandingPage__header-text center-align">
                    <h1>PREMIUM <strong>MUSIC</strong>APP </h1>
                    <p>Listen to +1.000.000 songs, follow your favorite artists, share with your friends.</p>
                    <div className="row">

                        <Link to='/newUser' class="waves-effect waves-light btn pink darken-3 col s4 offset-s1">
                            Get trial 30 days
                        </Link>
                        <Link to='/login' class="waves-effect waves-light btn deep-purple darken-3 col s4 offset-s2">
                            Login now
                        </Link>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default LandingPage;