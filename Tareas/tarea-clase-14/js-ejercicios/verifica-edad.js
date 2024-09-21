while(true){
    let edad = prompt('Ingrese su Edad:')

    if(isNaN(edad)){
        alert('Error Ingrese un dato tipo numero.')
    }
    else if(Number(edad) <= 0){
        alert('Error Ingrese un numero mayor a 0.')
    }
    else if(Number(edad) >= 18){
        alert('Usted es mayor de edad')
        break
    }
    else if(Number(edad) < 18){
        alert('Usted es menor de edad')
        break
    }
}