import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import {NavWrapper} from './styledComponents'

const Container = props => {
    return (
        <div>
            <NavWrapper>
                <NavLink to='/cred/login' >Login</NavLink>{' '}
                <NavLink to='/cred/register' >Register</NavLink>
            </NavWrapper>
            <Route path='/cred/login' component={Login} />
            <Route path='/cred/register' component={Register} />
        </div>
    )
}

export default Container; 