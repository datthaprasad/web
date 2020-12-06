import React from "react-router-dom"
import { useHttpClient } from "../Hooks/Http-Hook"
import "./Course.css"
import CourseList from "./CourseList";
const Course=()=>{
    
    //const {isLoading,error,sendRequest,clearError}=useHttpClient();
    let course;
    // try{
    //     course=await sendRequest(
    //         `https://web-mini.herokuapp.com/course`,
    //         'GET',
    //         {'Content-Type':'application/json'}
    //         );
    // }
    // catch(err){
    //     console.log("course error\n"+err);
    // }
     course=[
        {
            title:"course1",
            type:"Aptitude",
            link:"source video 1"
        },
        {
            title:"course 2",
            type:"techical",
            link:"source video 2"
        },
        {
            title:"course 3",
            type:"techical",
            link:"source video 2"   
        }
     ]
    return(
        <div style={{paddingTop:"10%"}}>
            <CourseList items={course}/>
        </div>
    )
}

export default Course;