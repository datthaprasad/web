import React from "react";
import "./Form.css";

const Form=()=>{

    const formHandler=()=>{
        return;
    }

    return(
        <React.Fragment>
    <div className="wrapper">
  <div className="title">
    <h1>Add new Course</h1>
  </div>
  <div className="drive-form">
    <div className="input-fields">
      <input type="text" className="input" id="title" placeholder="Title"/>
      <input type="text" className="input" id="type" placeholder="Type (Aptitude/Technical/HR)"/>
      <input type="text" className="input" id="id" placeholder="YouTube ID"/>
      <input type="text" className="input" id="short" placeholder="Short description"/>

    </div>
    <div className="msg">
      <textarea style={{"border":"solid 1px white"}} id="long" placeholder="Additional Description"></textarea>
      <div className="btns" style={{textAlign:"center"}} onClick={formHandler}>submit</div>
    </div>
  </div>
</div>
</React.Fragment>);
}

export default Form;