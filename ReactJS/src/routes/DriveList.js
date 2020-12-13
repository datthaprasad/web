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
    
    <ul style={{listStyleType:'none',textAlign:"center",paddingTop:"3%"}}>
      {props.items.map(user => (
        <DriveItem
          name={user.name}
          role={user.role}
          link={user.link}
          date={user.date}
          desc={user.desc}/>
        
      ))}
    </ul>
  );
};

export default DriveList;
