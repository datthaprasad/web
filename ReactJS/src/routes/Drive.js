import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Hooks/AuthContext';
import LoadingSpinner from '../UIelements/LoadingSpinner';
import { useHttpClient } from "../Hooks/Http-Hook";
import "./Drive.css"
import DriveList from "./DriveList";
import ErrorModal from '../UIelements/Error';
import { useHistory } from 'react-router-dom';
const Drive=()=>{
    const history=useHistory();
    const auth=useContext(AuthContext);
    useEffect(()=>{
        document.body.style.background="none"
    },[])
   
    
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    const drive=[
        {
            type:"shdghsgd"
        },
        {
            type:"hfhfh"
        }
    ];

    const form=()=>{
        history.push('/form-drive');
    } 

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
        {error && <ErrorModal error={error} onClear={clearError}/>}
        {isLoading && <LoadingSpinner asOverlay/>}
        {!auth.isLogedIn && <h1 style={{paddingTop:"5%",textAlign:"center"}}> you dont have permission without login</h1>}
        {auth.isLogedIn && <div>
        <h1>DRIVES YOU WANT</h1>
        {auth.isAdmin && <button className="tn" onClick={form}>New Drive</button>}   
            <DriveList items={drive} items2={drive2}/>
        </div>}
        </React.Fragment>

    );
}

export default Drive;