import React from 'react';
import DriveItem from './DriveItem';
import './DriveList.css';

const DriveList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Drive Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{textAlign:"center",paddingTop:"3%"}}>
    //   {/* <h3>{props.type}</h3> */}
    <h2>{props.live}</h2>
    <ul style={{listStyleType:'none',textAlign:"center"}}>
      
      {props.items.map(user => (
        <DriveItem
        //   key={user.title}
        //   title={user.title}
          type={user.type}/>
        //   src={user.link}
        
      ))}
    </ul>
     </div>
  );
};

export default DriveList;
