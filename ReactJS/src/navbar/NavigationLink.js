import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLink.css';

import {AuthContext} from '../Hooks/AuthContext'

const NavLinkss=props=>{
    const auth=useContext(AuthContext);
    return <ul className="nav-links">
        <li key='1'>
        <a href='/' exact>Home</a>
        </li>
        {!auth.isLogedIn && <li key='2'>
        <NavLink to='/courses'>Courses</NavLink>
        </li>}
        {!auth.isLogedIn && <li key='3'>
        <NavLink to='/place/new'>Drive</NavLink>
        </li>}
        {!auth.isLogedIn && <li key='4'>
         <NavLink to="/login">Login</NavLink>
        </li>}
        {auth.isLogedIn && <li>
          <button onClick={auth.Logout}>Logout</button>
        </li>}
    </ul>

}

export default NavLinkss;