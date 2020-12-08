import React from 'react'
// import { useHttpClient } from "../Hooks/Http-Hook";
import "./Drive.css"
import DriveList from "./DriveList";
const Drive=()=>{
    
    // const {isLoading,error,sendRequest,clearError}=useHttpClient();
    const drive=[
        {
            type:"shdghsgd"
        },
        {
            type:"hfhfh"
        }
    ];
    const drive2=[];
    // const drive2=[
    //     {
    //         type:"upcoming"
    //     },
    //     {
    //         type:"upcoming"
    //     }
    // ];
    // try{
    //     drive=await sendRequest(
    //         `https://web-mini.herokuapp.com/drive`,
    //         'POST',
    //         {'Content-Type':'application/json'},
    //         JSON.stringify({
    //             type:"live"
    //         })
    //         );
    // }
    // catch(err){
    //     console.log("drive error\n"+err);
    // }
    
    return(
        <React.Fragment>
        <div>
            
            <DriveList items={drive} items2={drive2}/>
        </div>
        </React.Fragment>

    );
}

export default Drive;