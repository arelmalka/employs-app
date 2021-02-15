import React, { useState } from 'react';
import { Consumer } from './ContextAPI';
import { Link } from 'react-router-dom';



export default function EmploysPage() {

    const [truckLicense, settruckLicense] = useState('');
    const [employName, setemployName] = useState('');
    const [employNumber, setemployNumber] = useState('');

    let showIfThereIsLicense;
    let removeOrAddProductInPlace;
    let tempList=[];

    return (
        <div>
            <Consumer>
                {(val) => {
                
                    
                    return (
                        <div style={{fontFamily:'sans-serif'}}>
                            {removeOrAddProductInPlace = (i) =>{  debugger;
                                val.dynamicProductList.filter((element,index)=>{
                                    if(index!=i){
                                        tempList.push(val.dynamicProductList[index])
                                        val.change(tempList)
                                    }
                                    if(index==i){
                                        val.changeInPlace(val.productList,element.productNumber)
                                        if(val.dynamicProductList.length==1){
                                            val.change(tempList)
                                        }
                                    }
                                })
                            }}
                            

                            {showIfThereIsLicense = () => {
                            if (val.license == true) {
                                settruckLicense('yes')
                            }
                            else {
                                settruckLicense('no')
                            }}} 
                            <h1>Welcome {val.name}</h1>
                            <div style={{marginLeft:'3%',textAlign:'left'}}>
                                <h4>Details :</h4>
                                <h5>Full Name: {val.name}</h5>
                                <h5>NO.: {val.number}</h5>
                                <h5>Forklift truck license: {truckLicense}</h5>
                            </div>
                            {showIfThereIsLicense()}
                            
                            <div style={{marginTop:'4%'}}>
                                <h2>List of products</h2>
                                {val.dynamicProductList.map((element,i)=>{
                                    return(
                                        <div style={{fontSize:'22px',backgroundColor:'whitesmoke',border:'1px solid black',margin:'5px',borderRadius:'4px',display:'inline-table',textAlign:'left',padding:'11px 62px 10px 10px'}}>
                                            NO.{element.productNumber}<br/>
                                            Name:{element.productName}<br/>
                                            Need forklift truck:{element.forkliftNeeded}<br/>
                                            <button onClick={()=>{
                                                if(element.forkliftNeeded=='yes' && truckLicense=='no'){
                                                    alert('A forklift truck license is required')
                                                }
                                                if(element.forkliftNeeded=='no'||(element.forkliftNeeded=='yes' && truckLicense=='yes')){
                                                   element.inPlace='yes';
                                                    removeOrAddProductInPlace(i)
                                                }
                                                if(true){
                                                    val.howManyProducts(val.emploies,val.number)
                                                }

                                            }}
                                            style={{backgroundColor:'gray',color:'white',borderRadius:'4px',marginLeft:'93%'}}>Update</button>
                                        </div>
                                    )
                                })}
                                <Link to='/'><button style={{backgroundColor:'gray',color:'white',borderRadius:'4px',marginTop:'5%',marginLeft:'93%'}}>Log out</button></Link>
                            </div>
                        </div>
                    )
                }}
            </Consumer>

        </div>
    )
}
