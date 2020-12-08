import React from 'react';
import './DriveItem.css';

const DriveItem = props => {
  return (

      <li>
          <div class="card-container">
         <div class="upper-container">
            <div class="image-container">
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png"alt="gone" />
            </div>
         </div>
         <div class="lower-container">
            <div>
               <h3>{props.type}</h3>
               <h4>DPS</h4>
            </div>
            <div>
               <p>dattha praad companies,
                  dkmkmkfmkmkmmkdmmdm fffff.
               </p>
            </div>
            <div>
               <a href="#" class="btn">Apply</a>
            </div>
         </div>
      </div>
      </li>
    
  );
};

export default DriveItem;
