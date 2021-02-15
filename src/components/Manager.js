import React from 'react';
import { Link } from 'react-router-dom';



export default function Manager(props) {

    const showEmploies=()=>{debugger;
        for(let i=0; i<props.emploies.length; i++){
            if(props.emploies[i].logInCounter>0){
                return(
                    props.emploies.map((element,i)=>{
                        if(element.logInCounter>0)
                        return(
                            <tr>
                            <td>{element.number}</td>
                            <td>{element.name}</td>
                            <td>{element.logInCounter}</td>
                            <td>{element.productCounter}</td>
                            </tr>
                        )
                    })
                )
            }
        }
    }


    return (
        <div>
            <h1 style={{fontSize:'xxx-large',fontFamily:'sans-serif'}}>Manager</h1>
            <div>
                <table style={{width:'85%',margin:'auto'}}>
                    <tr>
                        <th>NO</th>
                        <th>Full Name</th>
                        <th>Counter</th>
                        <th>Number Of Products</th>
                    </tr>
                    {showEmploies()}
                </table>
            </div>

            <Link to='/'><button style={{backgroundColor:'gray',color:'white',borderRadius:'4px',marginTop:'5%',marginLeft:'93%'}}>Log Out</button>
            </Link>
        </div>
    )
}
