import React from 'react'
import './Home.css'
const Home=()=>{
  return(
    <body>
   
    <div className="main">
      
      <div className="container">
        <div className="paragraph">
          <p>Advancements in technology and communication have brought the world closer than ever before.
            The Srinivas Institute of Technology (SIT) was established in 2006 with the aim of producing
             world className technology graduates tuned to the demands of a fast changing global village. SIT
             has gained the name as the best, self financed, engineering college in Karnataka in terms of
             infrastructural facilities. 
          </p>
        </div>
        <div className="image">
          <img src="D:\WEB_MINI_PROJECT\web\ReactJS\src\images\sit.jpg" alt="invalid url"/>
         
         
        </div>
    
      
        <div className="text-container">
         
          <video src="../images/particles.mp4" muted="" autoPlay=""></video>
          <h1><span>W</span>ELCOME, TO<span> JOB</span>  PORTAL</h1>
      
          
        </div>
       
      </div>
 
    </div>
    <div className="company">
      <h2>COMPENIES</h2>
    </div>


     <main>
      <div className="box">
     <img src="../images/amazon.png"alt="invalid url"border="3"style={{border:"#555"}}/></div>
     <div className="box">
     <img src="../images/bsnl.png"alt="invalid url"border="3" style={{border:"#555"}}/></div>
     <div className="box">
      <img src="../images/infosys.jpg"alt="invalid url"border="3" style={{border:"#555"}}/></div>
      <div className="box">
      <img src="../images/robosoft.png"alt="invalid url"border="3" style={{border:"#555"}}/></div>
      <div className="box">
        <img src="../images/wipro.png"alt="invalid url"border="3" style={{border:"#555"}}/></div>
        <div className="box">
        <img src="../images/Tech-Mahindra.png"alt="invalid url"border="3" style={{border:"#555"}}/></div>
     </main>
    
  </body>
  );
}
export default Home;

