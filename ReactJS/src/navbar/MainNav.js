import React, { useState} from 'react'
import {Link} from 'react-router-dom'

 import './MainNav.css'
 import MainHeader from './MainHeader'
 import NavLinkss from './NavigationLink'
 import Side from './SideBar'
 import Backdrop from './Backdrop'

 const MainNav=props=>{

    
const [drawerisopen,setdrawer]=useState(false);

const open=()=>{
    setdrawer(true)
}
function close(){
    setdrawer(false)
}



     return (
        <React.Fragment>
         {drawerisopen && <Backdrop onClick={close}/>}
          <Side show={drawerisopen} onClick={close}>
             <nav className="main-navigation__drawer-nav">
             <NavLinkss/>

             </nav>

         </Side>
         <MainHeader>
             <button className="main-navigation__menu-btn" onClick={open} >
                 <span/>
                 <span/>
                 <span/>
             </button>
             <h1 className="main-navigation__title">
                 <Link to='/'> ENGINEERS JOB PORTAL </Link>
            </h1>
             <nav className="main-navigation__header-nav"> 
                 <NavLinkss/>
             </nav>
         </MainHeader>
         </React.Fragment>
     );

 }

 export default MainNav;