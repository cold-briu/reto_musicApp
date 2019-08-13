import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LibCard extends Component {
    constructor() {
        super()
    }
    state = {}
    render() {
        return (
            <div className="col s6 hoverable">
                <Link to="/myLib/artist">
                    <div className="card">
                        <div className="card-image">
                            <img src="http://www.bagsunlimited.com/images/product/medium/4183.jpg" />
                            <span className="p0 pl5 pr5 card-title black-text white z-depth-2 ">Artist Name</span>
                        </div>
                        <div className="card-content p0 pl5">
                            <p> Album Name · 1999</p>
                        </div>
                    </div>
                </Link>

            </div>
        );
    }
}

export default LibCard;