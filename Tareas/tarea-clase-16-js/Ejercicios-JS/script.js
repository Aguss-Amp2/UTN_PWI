// 7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre

// function decirNombre(nombre){
//     alert('Hola '+ nombre)
// }

// decirNombre('Agustin')

// 8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta

// function saludar(nombre){
//     alert("Hola "+ nombre)
//     saludar(prompt('Ingrese su Nombre:'))
//     break
// }

// saludar('Agustin')

// 9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b

// function sumar(a,b){
//     return a + b
// }

// console.log(sumar(6, 10))

// 10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

// function restar(a,b){
//     return a - b
// }

// console.log(restar(6, 10))

//  11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null

// function calcular(operacion,a,b){
//     if(operacion === '+'){  
//         return alert('Su Resultado es: '+ sumar(a,b))
//     }
//     else if(operacion === '-'){
//         return alert('Su Resultado es: '+ restar(a,b))
//     }
// }

// console.log(calcular('-',2,7))

// 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

// function contarHasta(numero){
//     for(let i = 1; i <= numero; i++){
//         console.log(i)
//     }
// }

// contarHasta(23)

// 13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

// let resp = prompt('Desea usar la Calculadora?')

// while(resp === 'si' || resp === 'Si' || resp === 'SI'){
//     let num = prompt('Ingrse un Numero:')

//     if(isNaN(num)){
//         alert('Ingrese un Numero porfavor')
//     }
//     else if(!isNaN(num)){
//         let num2 = prompt('Ingrse otro Numero:')
//         if(isNaN(num2)){
//             alert('Ingrese un Numero porfavor')
//         }
//         else if(!isNaN(num2)){
//             let op = prompt('Ingrse que operacion quiere usar + o - :')
//             calcular(op,Number(num),Number(num2))
//         }
//     }

//     let resp2 = prompt('Desea usar la Calculadora?')

//     if(resp2 != 'si' && resp2 != 'Si' && resp2 != 'SI'){
//         break
//     }
// }

// 14) Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..

// for(let i = 1; i <= 25; i++){
//     console.log(i*11)
// }


// 15) Hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.e ingresan valores por teclado.

// let par = 0, impar = 0

// for(let i = 1; i <= 5; i++){
//     num = prompt('Ingrese otro Numero: ')

//     if(num % 2 == 0){
//         par++
//     }
//     else{
//         impar++
//     }
// }

// alert('Los pares son '+ par +' Y los impares son '+ impar)


// 16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. 

// let total = 0, result = 0
// for(let i = 1; i <= 5; i++){
//     let alt = prompt('Ingrese su Altura en cm ejemplo(180 cm): ')
//     total += Number(alt)
//     if(i === 5){
//         result = total / 5
//         alert('El Promedio es de '+ Number(result))
//     }
// }