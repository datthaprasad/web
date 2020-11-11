import React from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom'
import Login from './routes/Login';
import Signup from './routes/Signup';
function App() {

  
  // const [UserId,setUserID]=useState(null);
  // const [Phonen,setPhone]=useState(null);
  // const [Playerss,setPlayers]=useState([]);
  // const [isLogedIn,SetLogedIn]=useState(false);
   

  // const Login1 = useCallback((id,phone,players)=>{
  //   console.log(id+" "+phone+" "+players);
  //   setUserID(id);
  //   SetLogedIn(true);
  //   setPhone(phone);
  //   setPlayers(players)
  // },[]);

  
  return (
    
    <div>   
      <React.Fragment>
      <BrowserRouter>
        <Switch>
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
          <Route path='/logout' >
  
          </Route>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
      </React.Fragment>
      </div> 
    
  );
  }

export default App;
