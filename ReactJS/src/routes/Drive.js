import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Hooks/AuthContext';
import LoadingSpinner from '../UIelements/LoadingSpinner';
import { useHttpClient } from "../Hooks/Http-Hook";
import "./Drive.css"
import DriveList from "./DriveList";
import ErrorModal from '../UIelements/Error';
import { useHistory } from 'react-router-dom';
const Drive=()=>{
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    const auth=useContext(AuthContext);
    const history=useHistory();
    const [list,setList]=useState([]);

    useEffect(async()=>{
        document.body.style.background="none";
        try{
            const data=await sendRequest(
               `https://job-portal-sit.herokuapp.com/drive`
               );
           console.log(data);
           setList(data);
       }
       catch(err){
           console.log("drive error\n"+err);
       }
    },[])
    

    const form=()=>{
        history.push('/form-drive');
    } 

   
    
    return(
        <React.Fragment>
        <div>
        {error && <ErrorModal error={error} onClear={clearError}/>}
        {isLoading && <LoadingSpinner asOverlay/>}
        {!auth.isLogedIn && <h1 style={{paddingTop:"20%",textAlign:"center"}}> You dont have permission without login</h1>}
        {auth.isLogedIn && <div style={{paddingTop:"6%"}}>
        <h1>DRIVES YOU WANT</h1>
        {auth.isAdmin && <button className="tn1" onClick={form}>Add New Drive</button>}   
            <DriveList items={list}/>
        </div>}
        </div>
        </React.Fragment>

    );
}

export default Drive;