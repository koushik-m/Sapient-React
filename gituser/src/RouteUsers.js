import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails'

var HomePage = () => <div className="jumbotron">HomePage</div>





var MainLayout = () => {
    return (<div className="container">
    <nav>
        <Link to="/">Home</Link>
        <Link to="/users">UsersPage</Link>

    </nav>
    <Route path="/" exact component = {HomePage}/>
    <Route path="/users" exact component = {UserList}/>
    <Route path="/users/:login" exact component = {UserDetails}/>

</div>)
    
}

export var RouterApp = () => {
    return (<BrowserRouter>
        <MainLayout/>
    </BrowserRouter>)
    
}