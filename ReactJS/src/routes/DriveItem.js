import React from 'react';
import './DriveItem.css';

const DriveItem = props => {
  return (

      <li className="car">
         <div class="upper-container">
           <div className="title_drive">
              <h1>{props.name}</h1>
              </div> 
            
         </div>
         <div class="lower-container">
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
