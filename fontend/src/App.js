import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Reservations from './pages/Reservations'
import Account from './pages/Account'

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/list" component={List} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/reservations" component={Reservations} exact />
                <Route path="/account" component={Account} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
