import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

