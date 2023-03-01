import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../Button/Button";
import { A } from "../Inputs/Inputs";
import { B } from "../Inputs/Inputs";


const Operadores = () => {

    const [res, setRes] = useState('');

    const [activeButton, setActiveButton] = useState('');

    function sumar(id){
        setRes(Number(A)+Number(B))
        setActiveButton(id);
    }

    function restar(id){
        setRes(A-B)
        setActiveButton(id);
    }

    function multiplicar(id){
        setRes(A*B)
        setActiveButton(id);
    }

    function dividir(id){
        setRes(A/B)
        setActiveButton(id);
    }


    return (
        <>
            <Button variant="outline-secondary" id="1" activeButton={activeButton} onClick={sumar} >
              SUMAR
            </Button>
            
            <Button variant="outline-secondary" id="2" activeButton={activeButton} onClick={restar}>
              RESTAR
            </Button>

            <Button variant="outline-secondary" id="3" activeButton={activeButton} onClick={multiplicar}>
              MULTIPLICAR
            </Button>

            <Button variant="outline-secondary" id="4" activeButton={activeButton} onClick={dividir}>
              DIVIDIR
            </Button>

            
            <input type="text" value={res}  />
            

        </>
    )
 
}



export default Operadores