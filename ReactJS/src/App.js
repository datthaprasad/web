import React, { useCallback, useState } from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom'
import MainNav from './navbar/MainNav';
import {AuthContext} from './Hooks/AuthContext'
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home'
import Drive from './routes/Drive';
import Course from './routes/Course';
import Form from './Hooks/Form';
import Form2 from './Hooks/Form2';
function App() {

  
  const [email,setEmail]=useState(null);
  const [admin,isAdmin]=useState(false);
  const [isLogedIn,setLogedIn]=useState(false);
   

  const Login1 = useCallback((email,admin1)=>{
    setEmail(email);
    setLogedIn(true);
    isAdmin(admin1)
  },[]);

  const Logout1=useCallback(()=>{
    setEmail(null);
    setLogedIn(false);
    isAdmin(false)
  },[]);

  
  return (
    
     
    <AuthContext.Provider value={{isLogedIn:isLogedIn,email:email,isAdmin:admin,LOGIN:Login1,LOGOUT:Logout1}} >
      <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <MainNav/>
            <Home/>
          </Route>
          <Route path='/login' exact>
          <MainNav/>
            <Login/>
          </Route>
          <Route path='/signup' exact>
          <MainNav/>
            <Signup/>
          </Route>
          <Route path='/form-course' exact>
          <MainNav/>
            <Form/>
          </Route>
          <Route path='/form-drive' exact>
          <MainNav/>
            <Form2/>
          </Route>

          <Route path='/drives' exact>
            <MainNav/>
            <Drive/>
          </Route>
          <Route path='/courses' exact>
            <MainNav/>
            <Course/>
          </Route>
          <Redirect to='/'/>
            <MainNav/>
            <Home/>
        </Switch>
      </BrowserRouter>
      </React.Fragment>
      </AuthContext.Provider> 
    
  );
  }

export default App;
