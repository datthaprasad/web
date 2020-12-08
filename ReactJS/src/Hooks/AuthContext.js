import {createContext} from 'react'
export const AuthContext=createContext({
    isLogedIn:false,
    email:null,
    isAdmin:false,
    LOGIN:()=>{},
    LOGOUT:()=>{}
    
    });