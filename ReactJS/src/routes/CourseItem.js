import React from 'react';
import './CourseItem.css';

const CourseItem = props => {
  return (

      <li className="card">
      <div style={{paddingTop:"3%",paddingBottom:"2%"}}>
      <iframe title={props.title} width="75%" height="350vh" src={`https://www.youtube.com/embed/${props.src}?autoplay=0&mute=1&controls=0`}>
</iframe>
      
<h3>{props.title}</h3>
      <h4>{props.short}</h4>
      <h5>{props.long}</h5>
      </div>
      </li>
    
  );
};

export default CourseItem;
