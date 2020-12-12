import React from "react";
import "./Form.css";

const Form2=()=>{

    const formHandler=()=>{
        
    }

    return(
        <React.Fragment>
    <div className="wrapper">
  <div className="title">
    <h1>New Drive</h1>
  </div>
  <div className="drive-form">
    <div className="input-fields">
      <input type="text" className="input" placeholder="Company Name"/>
      <input type="text" className="input" placeholder="Job Role"/>
      <input type="text" className="input" placeholder="Link to apply"/>
      <input type="text" className="input" placeholder="Last date"/>

    </div>
    <div className="msg">
      <textarea style={{"border":"solid 1px white"}} placeholder="Description/Eligibilty"></textarea>
      <div className="btn" onClick={formHandler}>send</div>
    </div>
  </div>
</div>
</React.Fragment>);
}

export default Form2;