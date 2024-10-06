// 1.
// Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
// Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
// Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
// Si no posee ninguno decir "no has ingresado una url valida"

// let texto = prompt('Ingrese su URL:')

// function comprobarURL(url){
//     if(url.includes('https://')){
//         alert('La url ingresada, cuenta con certificado ssl.')
//     }
//     else if(url.includes('http://')){
//         alert('La url ingresada, no cuenta con certificado ssl.')
//     }
//     else{
//         alert('No has ingresado una url valida')
//     }
// }

// console.log(comprobarURL(texto))


// 2.
// Dado los siguientes texto 
// "hola%20como%20estas,%20todo%bien?" 
// "no%20me%20siento%20bien"
// "que%20mal"

// descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
// Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar

// "el mensaje es corto" entre 1 y 8 caracteres
// "el mensaje es mediano" entre 9 y 18
// "el mensaje es largo"  mas de 18

// Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
// "el mensaje no es complejo"

// let codigoCifrado = "que%20mal"


// function decifrarCodigo(codigo){
//     let codigoDesifrado = codigo.replaceAll('%',' ').replaceAll('20','')
    
//     console.log('El codigo decifrado es: ',codigoDesifrado)

//     codigoDesifrado = codigo.replaceAll('%','').replaceAll('20','')

//     let cantLetras = codigoDesifrado.length

//     if(cantLetras >= 1 && cantLetras <= 8){
//         console.log('El mensaje es corto.')
//     }
//     else if(cantLetras >= 9 && cantLetras < 18){
//         console.log('El mensaje es mediano.')
//     }
//     else if(cantLetras >= 18){
//         console.log('El mensaje es largo.')
//     }

//     if(codigoDesifrado.includes(',') || codigoDesifrado.includes('@') ||codigoDesifrado.includes('-')){
//         console.log('El mensaje es complejo')
//     }
//     else{
//         console.log('El mensaje no es complejo')
//     }
// }

// console.log(decifrarCodigo(codigoCifrado))

// 3.
// solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
// con el algoritmo anterior. 


// let mensaje = prompt('Ingrese su mensaje:')

// function cifrarMensaje(msn){
//     let mensajeCifrado = msn.replaceAll(' ','%20')
//     return mensajeCifrado
// }

// decifrarCodigo(cifrarMensaje(mensaje))

// 4.
// Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
// una maysucula, sino decir "tiene minuscula"


//  Dado una cadena de texto, imprimir "La cadena es mayor a 10 caracteres" si la longitud de la cadena es mayor a 10, de lo contrario imprimir "La cadena es menor o igual a 10 caracteres".

//  Dada una cadena de texto, imprimir "La cadena contiene la letra 'a'" si la cadena contiene la letra 'a', de lo contrario imprimir "La cadena no contiene la letra 'a'".

//  Dada una cadena de texto, reemplazar todas las apariciones de la letra 'a' con la letra 'x' y imprimir la nueva cadena.

//  Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número válido, de lo contrario imprimir "La cadena no es un número".

//  Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida".

function MayusculaOrMinuscula(palabra){
    let palabra2 = palabra.toLowerCase()

    if(palabra === palabra2){
        console.log('Tiene Minuscula.')
    }
    else{
        console.log('Tiene Mayuscula.')
    }
}

function tamanioCadena(texto){
    let textoSinEspacios = texto.replaceAll(' ','')

    if(textoSinEspacios.length > 10){
        console.log("La cadena es mayor a 10 caracteres")
    }
    else if(textoSinEspacios.length <= 10){
        console.log("La cadena es menor o igual a 10 caracteres")
    }
}

function contieneA(palabra){
    let palabraMinu = palabra.toLowerCase()
    if(palabraMinu.includes('a')){
        console.log('La frase contiene la letra a')
    }
    else{
        console.log('La frase NO contiene la letra a')
    }
}

function reemplazoA(palabra){
    let palabraMinu = palabra.toLowerCase()
    let palabraX = palabraMinu.replaceAll('a','x')
    console.log(palabraX)
}

function comprobarNum(palabra){
    let numero = Number(palabra)
    if(!isNaN(numero)){
        console.log('La cadena es un Numero')
    }
    else{
        console.log('La cadena NO es un Numero')
    }
}

function comprobarCorreo(palabra){
    if(palabra.includes('@hotmail.com')){
        console.log("La cadena es una dirección de correo electrónico válida")
    }
    else{
        console.log("La cadena es una dirección de correo electrónico NO válida")
    }
}

let texto = prompt('Ingrese su Frase:')
MayusculaOrMinuscula(texto)
tamanioCadena(texto)
contieneA(texto)
reemplazoA(texto)
comprobarNum(texto)
comprobarCorreo(texto)