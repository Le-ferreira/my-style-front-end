import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Marketplace from './pages/Marketplace'
import SingIn from './pages/auth/SingIn'
import SingUp from './pages/auth/SingUp'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={SingIn}/>
                <Route exact path='/SingUp' component={SingUp}/>
                <Route exact path='/app' component={Marketplace}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes