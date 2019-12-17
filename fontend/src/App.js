import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/list" component={List} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
