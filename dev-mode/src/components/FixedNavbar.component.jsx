import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FixedNavbar.css'


const FixedNavbar = () => {
    return (
        <div class="navbar-fixed ">
            <nav>
                <div className="nav-wrapper">
                    <div class="nav-content ">
                        <ul class="tabs">
                            <li class="tab ">
                                <Link to="/home">
                                    <i class="material-icons">home</i>
                                </Link>
                            </li>
                            <li class="tab">
                                <Link to="/myLib">
                                    <i class="material-icons">library_music</i>
                                </Link>
                            </li>
                            <li class="tab">
                                <Link to="/settings">
                                    <i class="material-icons">settings</i>
                                </Link>
                            </li>
                            <li class="tab">
                                <form role="search" method="get" id="searchform" action="">
                                    <label id="labela" for="s">
                                        <i className="material-icons">search</i>
                                    </label>
                                    <input type="text" value="" placeholder="search" id="s" />
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default FixedNavbar