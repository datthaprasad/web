import React from "react";
import "./Form.css";

const Form2=()=>{

    const formHandler=()=>{
        
    }

    return(
        <React.Fragment>
    <div className="wrapper">
  <div className="title">
    <h1>Add new Company Drive</h1>
  </div>
  <div className="drive-form">
    <div className="input-fields">
      <input type="text" className="input" placeholder="First Name"/>
      <input type="text" className="input" placeholder="Middle Name"/>
      <input type="text" className="input" placeholder="Last Name"/>
      <input type="text" className="input" placeholder="Title"/>

    </div>
    <div className="msg">
      <textarea style={{"border":"solid 1px white"}} placeholder="Description"></textarea>
      <div className="btn" onClick={formHandler}>send</div>
    </div>
  </div>
</div>
</React.Fragment>);
}

export default Form2;