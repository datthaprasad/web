import React from 'react-router-dom'
import './About.css'
const About=()=>{
    return(
        <div>
        <div className="about-section1">
          <hr/>
  <h1>About Us </h1>
  <p>Our aim is to transform Society through education by setting up academic institutions in dynamic equilibrium with its social, ecological and economic </p>
  <p>environment striving continuously for excellence in education, research and technological service to the nation..</p>
</div>

<h2 style={{"text-align":"center","padding":"3vh"}}>COMMUNITY</h2>
<div className="row">
  <div className="column">
    <div className="carda">
      <img src="https://www.sitmng.ac.in/img/President.jpg" alt="Jane" style={{"width":"90%","height":"45vh","marginLeft":"5%","borderRadius":"5vh","marginTop":"2vh","marginBottom":"3vh"}}/>
      <div className="containera">
        <h2>Shri. CA. A Ragavendra Rao</h2>
        <p className="title">Chairman of Srinivas Group</p>
        <p>Chairman of Srinivas Institute of Technology- Mangalore</p>
        <p>chairman@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="carda">
      <img src="https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-9/57029124_2144713828929807_422017348996694016_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=OiXddrGzbZsAX-Uaa1O&_nc_oc=AQnbX2yp1yDxbPJPspQWY41EaRO8f2k5OL9tEv1eR8NLztVUAP-SV6n0hsDNxnLeH2wH8PW6Iemw3bPD9HiEc2bN&_nc_ht=scontent.fblr4-1.fna&oh=b0166e29a981c0471563d1be540d9ac2&oe=5FECF487" alt="Mike" style={{"width":"90%","height":"45vh","marginLeft":"5%","borderRadius":"5vh","marginTop":"2vh","marginBottom":"3vh"}}/>
      <div className="containera">
        <h2>Dr. Shrinivas Mayya D</h2>
        <p className="title">The principal</p>
        <p>Principal at Srinivas Institute of Technology- Mangalore.</p>
        <p>pincipal@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="carda">
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGKthKMCXfJnA/profile-displayphoto-shrink_200_200/0/1516625471403?e=1613001600&v=beta&t=IuFp1uvRlEQ7H1OE17Nfj8mOvIl6s-qwUasHKiZHSSo" alt="HOD" style={{"width":"90%","height":"45vh","marginLeft":"5%","borderRadius":"5vh","marginTop":"2vh","marginBottom":"3vh"}}/>
      <div className="containera">
        <h2>Dr. Shivakumar G S</h2>
        <p className="title">Head of the department</p>
        <p>Professor at Srinivas Institute of Technology- Mangalore</p>
        <p>hod@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>

    );
}
export default About;