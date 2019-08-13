import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SocialMediaLogin = (props) => {
    let output;

    switch (props.mode) {

        case "github":
            output = <a className="waves-effect waves-light btn social github">
                <i className="fab fa-github"></i> Sign in with github</a>

            break;

        case "instagram":
            output = <a className="waves-effect waves-light btn social instagram">
                <i className="fab fa-instagram"></i> Sign in with instagram</a>

            break;

        case "google":
            output = <a className="waves-effect waves-light btn social google">
                <i className="fab fa-google"></i> Sign in with google
            </a>
            break;

        case "facebook":
            output = <a className="waves-effect waves-light btn social facebook">
                <i className="fab fa-facebook"></i> Sign in with facebook
            </a>

            break;

        default:
            output = <a className="waves-effect waves-light btn social reddit">
                <i className="fas fa-envelope"></i> Sign in using Mail</a>
            break;
    }

    return (
        <>
            {output}
        </>
    )

}

export default SocialMediaLogin