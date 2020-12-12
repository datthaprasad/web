import React from 'react';

import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Course Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{textAlign:"center",paddingTop:"3%"}}>
      {/* <h3>{props.type}</h3> */}
    <ul style={{listStyleType:'none',textAlign:"center"}}>
      
      {props.items.map(user => (
        <CourseItem
          title={user.title}
          type={user.type}
          src={user.id}
          short={user.short}
          long={user.long}
        />
      ))}
    </ul>
    </div>
  );
};

export default CourseList;
