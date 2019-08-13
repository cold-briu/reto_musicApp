import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarLayout from './NavbarLayout';
const userLogo = ["https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png", "https://s3.us-east-2.amazonaws.com/eafitrequisitos/john.png"];


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'purple darken-4',
            btn: <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i></a>,

            items: <div>

                <li><Link to="/home">Home</Link></li>
                <li><Link to="/info">Personal Info</Link></li>
                <li><Link to="/stats">Stats</Link></li>
                <li><Link to="mobile.html">Tasks</Link></li>
                <li><Link to="mobile.html">Tools & resources</Link></li>
            </div>,

            sidebar: <ul className="sidenav" id="mobile-demo">
                <li><img src={userLogo[1]} alt="" className="circle responsive-img" /></li>
                <h4 className="black-text center-align" >Caetano Veloso</h4>
            </ul>
        }

        if (props.basic === true) {
            this.state.btn = ' ';
            this.state.items = "";
            this.state.sidebar = " ";
            this.state.color = 'pink darken-3';
        }

    }
    render() {
        const { items, sidebar, color, btn } = this.state;
        return (

            <NavbarLayout
                items={items}
                sidebar={sidebar}
                color={color}
                btn={btn}
            />
        );
    }
}

export default Navbar;