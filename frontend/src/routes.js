import React from 'react';
import {  BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import UpdateStudent from './pages/UpdateStudent';
import Login from './pages/Login';
import FuncRegister from './pages/FuncRegister';


export default function Routes(){
    return(
        <BrowserRouter>
            
            <Switch>
                <Route path="/" exact component={ Login }/>
                <Route path="/home"  component={ Home }/>
                <Route path="/register"component={ Register }/>
                <Route path="/FuncRegister"component={ FuncRegister }/>
                <Route path="/List/up/:id" component={ UpdateStudent }/>
            </Switch>

        </BrowserRouter>
    )
}