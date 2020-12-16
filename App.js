import React, {useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button';
function App() {

  const[state, setState]= useState ({
    joke: ''
  })




useEffect( ()=> {
fetchData();
}, []);

const fetchData = async ()=> {
const result= await axios.get('https://api.chucknorris.io/jokes/random');
console.log(result.data.value );  
setState({
  ...state,
  joke:result.data.value 
} );
}




  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
      <h1 className="title">Chuck Norris API </h1>
    </div>

  

    </div>
<h2 className=" subTitle"> School </h2>
 <button/>
<h3> {state.joke}</h3>
    </div>


  );
}

export default App;
