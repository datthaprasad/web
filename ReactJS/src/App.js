import React, { useCallback, useState } from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom'
import MainNav from './navbar/MainNav';
import {AuthContext} from './Hooks/AuthContext'
import Login from './routes/Login';
import Signup from './routes/Signup';
function App() {

  
  const [email,setEmail]=useState(null);
  const [isLogedIn,setLogedIn]=useState(false);
   

  const Login1 = useCallback((email)=>{
    setEmail(email);
    setLogedIn(true);
  },[]);

  const Logout1=useCallback(()=>{
    setEmail(null);
    setLogedIn(false)
  },[]);

  
  return (
    
     
    <AuthContext.Provider value={{isLogedIn:isLogedIn,email:email,LOGIN:Login1,LOGOUT:Logout1}} >
      <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <MainNav/>
          </Route>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Route path='/signup' exact>
            <Signup/>
          </Route>
          <Route path='/companies' exact>
            {/* <Comapny /> */}
          </Route>
          <Route path='/courses' exact>
            {/* <Course/> */}
          </Route>
          <Redirect to='/'/>
            <MainNav/>
        </Switch>
      </BrowserRouter>
      </React.Fragment>
      </AuthContext.Provider> 
    
  );
  }

export default App;
