import React from 'react';
import {  BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import UpdateStudent from './pages/UpdateStudent';


export default function Routes(){
    return(
        <BrowserRouter>
            
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/register" exact component={ Register }/>
                <Route path="/List/up/:id" exact component={ UpdateStudent }/>
            </Switch>

        </BrowserRouter>
    )
}