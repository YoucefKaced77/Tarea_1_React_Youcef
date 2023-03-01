import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export var A=0
export var B=0

const Inputs = () => {

  const handleTextChange = (event) => {
    A=event.target.value;
  };

  const handleTextChange1 = (event) => {
    B=event.target.value;
  };


  return (
      <>
        <input type="text" defaultValue={A}  onChange={handleTextChange}/>
        <input type="text" defaultValue={B}  onChange={handleTextChange1}/>
      </>
  )
 
}



export default Inputs