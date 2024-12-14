// rafce: React arrow function component export default
// Un componente de React exportado por defecto

import React, { useState } from 'react'

const EstadosScreen = () => {
    //Es una funcion que nos permite generar estados de react
    //Devuelve un array con el valor de tu estado y una funcion de seteo
    //useState => [stateValue, setState]
    //useState espera recibir el valor inicial de tu estado

    //REGLAS
    //No se puede reasignar el valor de un Estado
    //Si queremos cambiar el valor de un estado debemos usar SIEMPRE LA FUNCION DE SETEO

    //Funcion de SETEO / SETTING
    //La funcion de setting recibe
    //1. Un valor, que sera el nuevo valor de estado

    //La funcion de setting hara que mi componente vuelva a cargarse

    //Esto es un array
    const [contador, setContador] = useState(1)
    const [error_min_cont, setError_min_cont] = useState(false)

    //La funcion de setter puede recibir una callback
    //El valor del retorno de la callback es el valor que tendra mi estado
    //La callback recibira un parametro con el valor del estado previo

    const incrementar = () => {
        //Llamo a la funcion de setting
        setContador((prevState) => {
            return prevState + 1
        })
        setError_min_cont(false) //reseteo el span para q no aparezca si es mayor q uno
    }
    const decrementar = () => {
        if(contador > 1){
            //Esto es una mala practica
            setContador(contador - 1)
        }
        else if(contador <= 1){
            setError_min_cont(true) //Lo pongo en true porque hay error
        }
    }
    /* 
    PROBLEMA:
    Quiero que cuando cambie el contador VUELVA a imprimir el componente

    SOLUCION:
    Usa estados de react
    */

    const handleShowHiddenText = () => {
        setIsHiddenText((prevHiddenTextState) =>{
            return !prevHiddenTextState
        })
    }
    //state isHiddenText: boolean (default true)
    const [isHiddenText, setIsHiddenText] = useState(true)

    return (
        <div>
            <h1>Estados en React</h1>
            <div>
                <button onClick={decrementar}>Restar</button>
                <span>{contador}</span>
                <button onClick={incrementar}>Sumar</button>
                {error_min_cont && <span>El estado no puede ser Negativo</span>}
            </div>

            <div>
                <button onClick={handleShowHiddenText}>Abrir</button>
                {!isHiddenText && <span>Texto Oculto</span> }
            </div>
        </div>
    )
}

export default EstadosScreen