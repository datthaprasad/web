import React,{ useContext, useEffect, useState } from "react";
import { useHttpClient } from "../Hooks/Http-Hook"
import "./Course.css"
import CourseList from "./CourseList";
import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import { useHistory } from "react-router-dom";
import { AuthContext } from '../Hooks/AuthContext';

const Course=()=>{
    useEffect(()=>{
        document.getElementById("btn1").click();
        document.body.style.background="none"

    },[])
    
    const [type,setType]=useState("");
    const [course,setcourse]=useState([]);
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    const history=useHistory();
    const auth=useContext(AuthContext);
    
    const typeHandler=async ()=>{
        setType("TECHNICAL");
        let list2;
        try{
                list2=await sendRequest(
                    `https://job-portal-sit.herokuapp.com/course`,
                    'POST',
                    {'Content-Type':'application/json'},
                    JSON.stringify({
                        type:"A"
                    })
                    
                    );
                    console.log(list2);
                    setcourse(list2)
            }
            catch(err){
                console.log("course error\n"+err);
            }
     
    }

    const type2Handler=async ()=>{
        setType("TECHNICAL");
        let list2;
        try{
                list2=await sendRequest(
                    `https://job-portal-sit.herokuapp.com/course`,
                    'POST',
                    {'Content-Type':'application/json'},
                    JSON.stringify({
                        type:"T"
                    })
                    
                    );
                    console.log(list2);
                    setcourse(list2)
            }
            catch(err){
                console.log("course error\n"+err);
            }
    }
    const type3Handler=async ()=>{
        setType("TECHNICAL");
        let list2;
        try{
                list2=await sendRequest(
                    `https://job-portal-sit.herokuapp.com/course`,
                    'POST',
                    {'Content-Type':'application/json'},
                    JSON.stringify({
                        type:"H"
                    })
                    
                    );
                    console.log(list2);
                    setcourse(list2)
            }
            catch(err){
                console.log("course error\n"+err);
            }
    }
    const form=()=>{
        history.push('/form-course');
    }
    
    return(
        <React.Fragment>
        {error && <ErrorModel error={error} onClear={clearError}/>}
        {isLoading && <LoadingSpinner asOverlay/>}
        {!auth.isLogedIn && <h1 style={{paddingTop:"5%",textAlign:"center"}}> you dont have permission without login</h1>}
        {auth.isLogedIn && <div style={{paddingTop:"5%",textAlign:"center"}}>
            <h1>COURSES YOU WANT</h1>
             {auth.isAdmin && <button className="tn" onClick={form}>New Course</button>}
            <div class="btn-group">
            <button id="btn1" onClick={typeHandler}>Aptitude series</button>
            <button  onClick={type2Handler}>Technical series</button>
            <button onClick={type3Handler}>HR round series</button>
            </div>
            <div style={{marginLeft:"6%"}}>
            <CourseList items={course} type={type}/>
            </div>
        </div>}

        </React.Fragment>
    )
}

export default Course;