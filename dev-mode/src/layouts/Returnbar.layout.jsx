import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Returnbar extends Component {
    state = {}
    render() {
        return (
            <nav>
                <div class="nav-wrapper">

                    <a href="#" class="brand-logo center">Current page</a>
                    <div className="left-align pl5 ">
                        <Link to="/myLib">
                            <i class="material-icons ">arrow_back</i>
                        </Link>
                    </div>


                </div>
            </nav>
        );
    }
}

export default Returnbar;