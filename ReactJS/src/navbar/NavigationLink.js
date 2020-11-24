import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLink.css';

import {AuthContext} from '../Hooks/AuthContext'

const NavLinkss=props=>{
    const auth=useContext(AuthContext);
    const myplace="/"+auth.userId+"/places";
    return <ul className="nav-links">
        <li key='1'>
        <NavLink to='/' exact> All users</NavLink>
        </li>
        {!auth.isLogedIn && <li key='2'>
        <NavLink to={myplace}> My places</NavLink>
        </li>}
        {!auth.isLogedIn && <li key='3'>
        <NavLink to='/place/new'> New place</NavLink>
        </li>}
        {!auth.isLogedIn && <li key='4'>
         <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>}
        {!auth.isLogedIn && <li>
          <button onClick={auth.Logout}>Logout</button>
        </li>}
    </ul>

}

export default NavLinkss;