import React from 'react';
import { Link } from 'react-router-dom';
import './CourseItem.css';

const CourseItem = props => {
  return (
      <li>
        <h3>{props.title}</h3>
{/*         
      <p>Related to {props.type}</p> */}
        <video width="300" height="300" controls >
            <source src="./Videos/video1.mp4" type="video/mp4"/>
      </video>
      </li>
    
  );
};

export default CourseItem;
