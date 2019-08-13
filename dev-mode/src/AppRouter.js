import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import component from './route/component';
import LandingPage from './pages/00Landing.page'
import Login from './pages/01Login.page';
import NewUser from './pages/01NewUser.page';
import MailCheck from './pages/02MailCheck.page'
import myLib from './pages/20myLib.page';
import Artist from './pages/21Artist.page'
import Settings from './pages/30Settings.page'

import Home from './pages/10Home.page';



class AppRouter extends React.Component {
    state = {
        isAuth: true,
    }

    constructor(props) {
        super(props);
        this.checkUserAuth = this.checkUserAuth.bind(this);
    }

    checkUserAuth(InputComponent) {
        return (
            this.state.isAuth ?
                <InputComponent />
                :
                <Redirect to="/" />

        )
    }
    render() {
        const { checkUserAuth } = this;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/newUser" component={NewUser} />
                    <Route exact path="/mailCheck" component={MailCheck} />

                    <Route exact path="/home" render={() => checkUserAuth(Home)} />
                    <Route exact path="/myLib" render={() => checkUserAuth(myLib)} />
                    <Route exact path="/myLib/artist" render={() => checkUserAuth(Artist)} />

                    <Route exact path="/settings" render={() => checkUserAuth(Settings)} />



                    <Route component={LandingPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;