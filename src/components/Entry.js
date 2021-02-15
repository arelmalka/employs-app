import React from 'react';
import { Link } from 'react-router-dom';

export default function Entry() {
    return (
        <div>
            <h1>Logistical Management</h1>
            <Link to='/Signin'>
                <button style={{backgroundColor:'#1987E1',color:"white",borderRadius:'4px',padding:'5px',fontSize:'20px'}}> Sign in</button> 
            </Link> <br/> <br/>

            <Link to='/Login'>
                <button style={{backgroundColor:'#1987E1',color:"white",borderRadius:'4px',padding:'5px',fontSize:'20px'}}> Log in</button> 
            </Link>
            
        </div>
    )
}
