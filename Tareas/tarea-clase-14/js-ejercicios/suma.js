let num1 = prompt('Ingrese un Numero:')

if(isNaN(num1)){
    alert('ERROR el primer dato DEBE ser numerico')
}

while(!isNaN(num1)){
    let num2 = prompt('Ingrese otro Numero:')
    
    if(isNaN(num2)){
        alert('ERROR el segundo dato DEBE ser numerico')
    }
    else{
        let resultado = Number(num1) + Number(num2)
        alert('La suma de estos dos Numeros es ' + resultado)
        break
    }
}