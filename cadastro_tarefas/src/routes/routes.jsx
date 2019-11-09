import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Todo from '../todo/todo'
import About from '../about/about'

/**
 * Redirect redireciona caso tenha uma URL invalida
 */
export default props => (

    <BrowserRouter>
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>
    </BrowserRouter>
)
