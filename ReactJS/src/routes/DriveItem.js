import React, { useState } from 'react';
import './DriveItem.css';

const DriveItem = props => {
   const show=()=>{
         let s=document.getElementById(props.name).getElementsByClassName("lower-container")[0].style.display;
      if(!(s==="block")) document.getElementById(props.name).getElementsByClassName("lower-container")[0].style.display="block"
      else document.getElementById(props.name).getElementsByClassName("lower-container")[0].style.display="none"
   }

  return (

      <li id={props.name} className="car2" onClick={show}>
         <div id='upper' class="upper-container"  >
           <div className="title_drive" >
              <h1>{props.name}</h1>
              </div> 
            
         </div>
         <div id='lower' class="lower-container">
            <div>
               <h3>{props.role}</h3>
               
            </div>
            <div>
               <p>{props.desc}</p>
               <h4>Last date for Apply is {props.date}</h4>
               <hr/>
               <br/>
            </div>
            <div>
               <br/>
               <a href={props.link} class="btn" target="_blank">Apply</a>
            </div>
         </div>
      </li>
    
  );
};

export default DriveItem;
