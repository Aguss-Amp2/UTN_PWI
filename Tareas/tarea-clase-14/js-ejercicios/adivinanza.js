let num_secret = 3

while(true){

    let respuesta = prompt('Adivine el Numero secreto del 1 al 10')

    if(isNaN(respuesta)){
        alert('Error Ingrese un dato tipo numero.')
    }
    else if(Number(respuesta) < 1 || Number(respuesta) > 10){
        alert('Error Ingrese un numero que se encuentre 1 y 10.')
    }
    else if(Number(respuesta) < num_secret){
        alert('Un poquitito mas.')
    }
    else if(Number(respuesta) > num_secret){
        alert('Te pasaste.')
    }
    else if(Number(respuesta) === num_secret){
        alert('Corresto ese es el Numero')
        break
    }
}