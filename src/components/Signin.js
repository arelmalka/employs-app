import React,{useState} from 'react'
import { useHistory } from "react-router-dom";


export default function Signin(props) {

    const [license, setlicense] = useState(false)
    const [employName, setemployName] = useState('');
    const [employNumber, setemployNumber] = useState('');
    const [nameValidation, setnameValidation] = useState('');
    const [numberValidation, setnumberValidation] = useState(''); 
    const [emploiesData, setemploiesData] = useState(props.emploiesData);

    const history = useHistory();
    

    function handleClick() {
        history.push("/");
      }


    return (
        <div style={{fontSize:'20px'}}>
            <div>
            No. <input onChange={(element) => { setemployNumber(element.target.value) }}
                style={{ fontSize: '20px', marginTop: '10px' }} placeholder='Employ number' type='text' /> <br />

            <p style={{ color: 'red',fontSize:'15px'}}>{numberValidation}</p>                
            </div>

            <div >
            FullName <input onChange={(element) => { setemployName(element.target.value) }}
                style={{ fontSize: '20px', marginTop: '10px',marginRight:'3%' }} placeholder='Full name' type='text' /> <br />

            <p style={{ color: 'red',fontSize:'15px',marginLeft:'5%'}}>{nameValidation}</p>                
            </div>
            
            <div>
                <h5 style={{display:'inline',marginBottom:'5px'}}>Forklift truck license</h5>
                <br/>        
                <input onChange={()=>{setlicense(true)}} type='radio' name='selector'/>
                <label for='true'>yes</label>
        
                <input onChange={()=>{setlicense(false)}} type='radio' name='selector' checked="checked"/>
                <label for='false'>no</label>
            </div>

            <button onClick={() => { 
                debugger;
                if (employNumber.length != 5) {
                    setnumberValidation('The number must be with 5 digits')
                }
                if (employName.length < 4) {
                    setnameValidation('The name must contain at least 4 characters')
                }
                if( employNumber.length==5 && employName.length >=4 && emploiesData.length==0){
                    props.add(employNumber,employName,license);
                    handleClick();
                };
                if(emploiesData.length>0){
                let count=0;
                let emploiesNumber=0
                for(let i=0; i<emploiesData.length; i++){
                    if(emploiesData[i].name==employName){
                        count++
                        if(count==2){
                            alert('Please write another name')
                        }
                    }
                    if(emploiesData[i].number==employNumber){
                        alert('Employ number is already in the system , take another one')
                    }
                    if(count<2 && emploiesData[i].number!=employNumber){
                    emploiesNumber++
                        if(emploiesNumber==emploiesData.length && employNumber.length==5 && employName.length >=4){
                            props.add(employNumber,employName,license);
                            handleClick();
                    }}}
                }

            }} style={{ fontSize: '20px', marginTop: '10px',backgroundColor:'gray',color:'white',borderRadius:'4px' }}> Create
            </button>
        </div>
    )
}
