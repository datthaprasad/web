import React from 'react';

import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul style={{columnCount:"2",listStyleType:'none'}}>
      {props.items.map(user => (
        <CourseItem
          key={user.title}
          title={user.title}
          type={user.type}
          src={user.link}
        />
      ))}
    </ul>
  );
};

export default CourseList;
