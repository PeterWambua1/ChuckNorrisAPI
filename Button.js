import React, {useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './App.js';

function Button(){

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
<div className="App">
<button className="App" onClick={axios.get('https://api.chucknorris.io/jokes/random')}>SCIENCE</button>
</div>




	);


}

export default Button;