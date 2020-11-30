import React,{useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './NavigationLink.css';

import {AuthContext} from '../Hooks/AuthContext'

const NavLinkss=props=>{
  const history=useHistory();
    const auth=useContext(AuthContext);
    return <ul className="nav-links">
        <li key='1'>
        <NavLink to='/' exact>Home</NavLink>
        </li>
        {auth.isLogedIn && <li key='2'>
        <NavLink to='/#'>Courses</NavLink>
        </li>}
        {!auth.isLogedIn && <li key='3'>
        <NavLink to='/signup'>Signup</NavLink>
        </li>}
        {auth.isLogedIn && <li key='3'>
        <NavLink to='/#'>Drive</NavLink>
        </li>}
        {!auth.isLogedIn && <li key='4'>
         <NavLink to="/login">Login</NavLink>
        </li>}
        {auth.isLogedIn && <li>
          <button onClick={()=>{auth.LOGOUT(); history.push('/')}}>Logout</button>
        </li>}
    </ul>

}

export default NavLinkss;