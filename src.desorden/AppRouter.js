import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './containers/LandingContainer/LandingPage';
import newUser from './containers/NewUserContainer/newUser';

import UserLogin from './containers/UserLoginContainer/UserLogin';


import Layout from './containers/Layout'

import './index.css';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Layout>
                    <Route exact path="/newUser" component={newUser} />
                    <Route exact path="/login" component={UserLogin} />



                </Layout>

            </Switch>
        </BrowserRouter>

    )
}

export default AppRouter