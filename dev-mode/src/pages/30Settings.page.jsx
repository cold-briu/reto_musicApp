import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/Main.layout';

class Settings extends Component {
    state = {}
    render() {
        return (
            <MainLayout>
                <h1>S E T T I N G S</h1>
                <Link to="/">
                    <button>Return</button>
                </Link>
            </MainLayout>
        );
    }
}

export default Settings;