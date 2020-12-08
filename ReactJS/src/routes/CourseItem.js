import React from 'react';
import './CourseItem.css';

const CourseItem = props => {
  return (

      <li className="card">
{/*         
      <p>Related to {props.type}</p> */}
        {/* <video width="300" height="300" controls >
            <source src="https://www.youtube.com/watch?v=3RC4xVMdI78" type="video/mp4"/>
      </video> */}
      <div style={{paddingTop:"3%",paddingBottom:"2%"}}>
      <iframe width="75%" height="350vh" src={`https://www.youtube.com/embed/${props.src}?autoplay=0&mute=1&controls=0`}>
</iframe>
      
<h3>{props.title}</h3>
      <h4>{props.type}</h4>
      <p>{props.src}{props.title}</p>
      </div>
      </li>
    
  );
};

export default CourseItem;
