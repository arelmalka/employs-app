import React, { useState } from 'react';
import EmploysPage from './EmploysPage'
import { useHistory } from "react-router-dom";


export default function LogIn(props) {

    const [employNumber, setemployNumber] = useState('');
    const [emploiesData, setemploiesData] = useState(props.emploiesData);
    const [employsPageTuggle, setemploysPageTuggle] = useState(false);
    const history = useHistory();
    

    function handleClick() {
        history.push("/manager");
      }


    const checkEmployNumber=()=>{ debugger;
        let count=0;
        for(let i=0; i<emploiesData.length; i++){ 
            if (emploiesData[i].number==employNumber){
                props.get(emploiesData[i].number,emploiesData[i].name,emploiesData[i].license);
                setemploysPageTuggle(true)   
            }
            if(emploiesData[i].number!=employNumber){
                count++
                if(count==emploiesData.length){
                alert('Employ number '+employNumber+' is not on the system' )
                }
        }
        }
    }

    const showLoginOrEmploysPage=()=>{
        if(employsPageTuggle==false){
          return(
            <div style={{fontSize:'20px'}}>
            <h2> Log in </h2>
            NO. <input onChange={(element)=>{setemployNumber(element.target.value)}} style={{ fontSize: '20px', marginTop: '10px',marginBottom:'15px' }} placeholder='Employ number' type='text' />
            <br/> 
            <button style={{fontSize:'20px',color:'white',borderRadius:'4px',backgroundColor:'gray'}} onClick={()=>{
               if(employNumber!='99999'){ 
                {props.countLogs(emploiesData,employNumber)}   
                checkEmployNumber();
               }
               if(employNumber=='99999'){
                   handleClick()
               }
               }}> Enter </button>
            </div>
            )
        }
        if(employsPageTuggle==true){
          return(
            <EmploysPage />
          )
        }
      }

    return (
        <div style={{fontSize:'20px'}}>
            {showLoginOrEmploysPage()}
        </div>
    )
}
