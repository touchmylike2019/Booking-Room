import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Header from './components/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/list" component={List} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
