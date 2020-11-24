import React from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'

import './SideBar.css'

const Side=props=>{
   
   return ReactDOM.createPortal(<CSSTransition 
      in={props.show}
      timeout={5000}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit><p className='side-drawer' onClick={props.onClick}> {props.children}</p>
      </CSSTransition>
      ,document.getElementById("drawer-hook"));
   
}

export default Side;