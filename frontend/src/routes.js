import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Acessar, Cadastro, EsqueciSenha, Home } from './pages';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro"  component={Cadastro} />
                <Route path="/acessar"  component={Acessar} />
                <Route path="/esqueci"  component={EsqueciSenha} />
            </Switch>
        </BrowserRouter>
    );
}