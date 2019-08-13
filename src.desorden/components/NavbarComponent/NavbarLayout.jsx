import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarLayout extends Component {

    render() {
        const { items, sidebar, color, btn } = this.props
        return (

            <>
                <nav >
                    <div className={`nav-wrapper ${color}`}>
                        <Link to="/" className="brand-logo"> <i className="material-icons ">group_work</i> </Link>
                        {btn}
                        <ul className="right hide-on-med-and-down">
                            {items}
                        </ul>
                    </div>
                </nav>

                {sidebar}

            </>
        );
    }
}

export default NavbarLayout;