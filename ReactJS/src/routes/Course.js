import { useState } from "react";
import React from "react-router-dom"
import { useHttpClient } from "../Hooks/Http-Hook"
import "./Course.css"
import CourseList from "./CourseList";
const Course=()=>{
    const [type,setType]=useState("");
    const [course,setcourse]=useState([]);
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    
    const typeHandler=()=>{
        setType("APTITUDE");
            setcourse([
        {
            title:"course1",
            type:"Aptitude",
            link:"3RC4xVMdI78"
        },
        {
            title:"course 2",
            type:"techical",
            link:"3RC4xVMdI78"
        },
        {
            title:"course 3",
            type:"techical",
            link:"3RC4xVMdI78"   
        }
     ]);
     
    }

    const type2Handler=async ()=>{
        setType("TECHNICAL");
        let list2;
        try{
                list2=await sendRequest(
                    `http://localhost:5000/course`,
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
        setcourse([
            {
                title:"course A1",
                type:"technical",
                link:"source video 1"
            },
            {
                title:"course A2",
                type:"techical",
                link:"source video 2"
            },
            {
                title:"courseA 3",
                type:"techical",
                link:"source video 2"   
            }
         ]);
    }
    
    return(
        <div style={{paddingTop:"5%",textAlign:"center"}}>
            <h1>COURSES YOU WANT</h1>
            <div class="btn-group">
            <button onClick={typeHandler}>Aptitude series</button>
            <button onClick={type2Handler}>Technical series</button>
            <button >HR series</button>
            </div>
            <CourseList items={course} type={type}/>
        </div>
    )
}

export default Course;