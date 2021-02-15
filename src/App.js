import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Entry from './components/Entry'
import './App.css';
import Signin from './components/Signin';
import LogIn from './components/LogIn';
import { Provider } from './components/ContextAPI'
import Manager from './components/Manager';



function App() {

  const [emploies, setemploies] = useState('');
  const [currentEmploy, setcurrentEmploy] = useState('');
  const [productList,setproductList] = useState([
    {productNumber:'11122',productName:'Green Box',forkliftNeeded:'no',inPlace:'no'},
    {productNumber:'22554',productName:'Green Box',forkliftNeeded:'no',inPlace:'no'},
    {productNumber:'66698',productName:'Blue Box',forkliftNeeded:'yes',inPlace:'no'},
    {productNumber:'78544',productName:'Red Box',forkliftNeeded:'no',inPlace:'no'},
    {productNumber:'69875',productName:'Red Box',forkliftNeeded:'no',inPlace:'no'}
  ]);
  const [dynamicProductList, setdynamicProductList] = useState([
    {productNumber:'11122',productName:'Green Box',forkliftNeeded:'no',inPlace:'no'},
    {productNumber:'22554',productName:'Green Box',forkliftNeeded:'no',inPlace:'no'},
    {productNumber:'66698',productName:'Blue Box',forkliftNeeded:'yes',inPlace:'no'},
    {productNumber:'78544',productName:'Red Box',forkliftNeeded:'no',inPlace:'no'},
    {productNumber:'69875',productName:'Red Box',forkliftNeeded:'no',inPlace:'no'}
  ]);

  const changeInPlaceProductList =(productList,product)=>{ 
    debugger;
    for(let i=0; i<productList.length; i++){
      if(productList[i].productNumber==product){
        productList[i].inPlace='yes'
      }
    }
  }

  const changeDynamicProductList =(product)=>{
    setdynamicProductList(product);
  }
  
  const addInputsData = (userNumber, userName,yesOrNo) => {
    setemploies([...emploies,{number:userNumber,name:userName,license:yesOrNo,logInCounter:0,productCounter:0}]);
}

  const getCurrentEmploy=(userNumber, userName,yesOrNo)=>{
    setcurrentEmploy({number:userNumber,name:userName,license:yesOrNo});
  }

  const countHowManyTimesEmployGetIn= (emploies,employNumber) => {
    for(let i=0; i<emploies.length; i++){
      if(emploies[i].number==employNumber){
        emploies[i].logInCounter++;
        console.log(emploies[i]);
      }
    }
  }

  const howManyProducts=(emploies,employNumber)=>{
    for(let i=0; i<emploies.length; i++){
      if(emploies[i].number==employNumber){
        emploies[i].productCounter++;
        console.log(emploies[i]);
      }
    }
  }

  return (
    <div className="App" style={{backgroundColor:'lightgray'}}>
      <Router>
        <Switch>     
          <Route path='/manager'>
              <Manager employ={currentEmploy} emploies={emploies}/>
          </Route>
          <Route path='/signin'>
            <Signin emploiesData={emploies} add={addInputsData}/>
          </Route>
          <Route path='/login'>
            <Provider value={{howManyProducts:howManyProducts,emploies:emploies,changeInPlace:changeInPlaceProductList,name:currentEmploy.name,number:currentEmploy.number,license:currentEmploy.license,productList:productList,dynamicProductList:dynamicProductList,change:changeDynamicProductList}}>
            <LogIn emploiesData={emploies}  get={getCurrentEmploy} currentEmploy={currentEmploy} countLogs={countHowManyTimesEmployGetIn}/>
            </Provider>
          </Route>          
          <Route path='/'>
            <Entry/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
