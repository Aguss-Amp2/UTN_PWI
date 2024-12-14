// FUNCIONES

// alert()

// Decalaramos la funcion saludar
// function saludar(){
//     alert('Este es el mejor saludo 🎉')
// }

// Invocamos a la funcion
// saludar()

// Crear la funcion preguntarNombre que solicitara el nombre al usuario y dira por alerta, 'tu noombre es {nombre_ingresado}'

// function preguntarNombre(){
//     let nombre_ingresado = prompt('Ingrese su Nombre:')
// }
// preguntarNombre()

// function mostrarNombre(nombre_ingresado){
//     alert('Tu nombre es ' + nombre_ingresado)
// }
// mostrarNombre()

// function calcularIVA(precio){
//     alert('EL IVA de tu producto es de ' + (precio * 1.21))
// }

// function calcularPrecioSinIVA(precio){
//     alert('El iva de tu producto es ' + (precio - precio * 0.21))
// }

// calcularIVA(100)
// calcularIVA(50)


function suma(a,b){
    return Number(a) + Number(b)
}

// suma(2, 5)
let result = sumar(24, 66)
// alert(result)
// console.log(result)
// document.write(result)

// Mala practica
document.write('<h1 class="title">Hola</h1>')


// Buena Practica
// let div = document.getDocumentById('id')
// div.innerHTML = '<h1>Hola</h1>'