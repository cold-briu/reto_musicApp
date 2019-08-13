import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/Main.layout';
import LibCard from '../components/LibCard.component'



class myLib extends Component {

    render() {
        const arras = new Array(20).fill().map(entry => "hola");

        return (
            <MainLayout>
                <h1>MY L I B</h1>
                <Link to="/">
                    <button>Return</button>
                </Link>
                <div className="row">
                    {arras.map(entry => <LibCard info={entry} />)}
                </div>
            </MainLayout>
        );
    }
}

export default myLib;