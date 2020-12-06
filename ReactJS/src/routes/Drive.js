import React from "react-router-dom"
import { useHttpClient } from "../Hooks/Http-Hook";
import "./Drive.css"
const Drive=async()=>{
    
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    let drive;
    try{
        drive=await sendRequest(
            `https://web-mini.herokuapp.com/drive`,
            'GET',
            {'Content-Type':'application/json'}
            );
    }
    catch(err){
        console.log("drive error\n"+err);
    }
    
    return(
        <div>
            drive page
        </div>
    );
}

export default Drive;