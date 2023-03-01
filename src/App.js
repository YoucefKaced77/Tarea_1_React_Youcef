import React from 'react';
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Inputs from './Components/Inputs/Inputs';
import Operadores from './Components/Operadores/Operadores';

const App = () => {        

  return(
    <>
      <h1>CALCULADORA</h1>  
      <Inputs/>
      <Operadores/>
    </>
  )
     
}


export default App

