import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Home from '../routes/Home';
import Page_Cakes from '../routes/Page_Cakes';
import Page_Desserts from '../routes/Page_Desserts';
import Page_Macarons from '../routes/Page_Macarons';

function Header(){
    return (
        <header className="main_header">
            <BrowserRouter>
                <Link to="/">
                    Logo
                </Link>
                <Navigation />
                <Route path="/" exact={true} component={Home} />
                <Route path="/pages/cakes" exact={true} component={Page_Cakes}/>
                <Route path="/pages/desserts" exact={true} component={Page_Desserts}/>
                <Route path="/pages/macarons" exact={true} component={Page_Macarons}/>
                <Redirect from="*" to="/" />
            </BrowserRouter>
        </header>
    );
}

export default Header;