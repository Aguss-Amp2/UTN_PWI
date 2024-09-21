// FUNCIONES


// while(!estoycansado){
//     console,log('bailar')
// }

// FOR
// Bucle es una estructura que nos permite repetir bloques/acciones del codigo

// CASO DE BUCLE FOR
// Quiero que por cada usuario de la aplicacion envies un mail de terminos y condiciones actualizado
// Cuando queremeos repetir una accion una X cantidad de veces

// Decir por cada usuario de mi app voy a d3ecir en consola usuario subscrito

let cantidad_usuarios = 3

// CONDICION
// Iterador: Cantidad de veces que se esta ejecutando una accion
// Condicion / limite: Mientras la condicion sea verdadera el bucle se repetira
// Actualizacion: A que ritma se va actualizar nuestro contador/iterador
// for(
//     let iterador = 1; 
//     iterador <= cantidad_usuarios; 
//     iterador = iterador + 1
// ){
//     // ACCION
//     console.log(iterador,'Usuario Subscrito')
// }

// Quiero q me digas por alerta hola 3 veces

// for(let iterador = 1;iterador <= 3; iterador++){
//     alert('Hola')
// }

// Solicitar al usuario 3 numeros y calcularemos la sumatoria de los 3 num
// let sumatoria = 0

// for(let iterador = 1; iterador <= 3; iterador++){
//     let numero = prompt('Ingrese un Numero:')

//     while(!numero || isNaN(numero)){
//         numero = prompt('Error dato no valido, ingrese un numero')
//     }
//     numero = Number(numero)
//     sumatoria = sumatoria + numero
// }

// alert('La sumatoria de tus numeros es ' + sumatoria)

/*
1)Imprime los numeros del 1 al 10
2)Imprime los numeros pares del 2 al 20
3)Imprime los numeros impares del 1 al 19
4)Imprime los numeros del 10 al 1, en orden inverso
5)Imprime los numeros del 1 al 10, pero se detiene en el numero 5 BREAK
6)Imprime los numeros del 1 al 10, pero se salta el 5 CONTINUE
*/

// Break corta el bucle
// Continue pasa a la siguiente operacion

// 1)Imprime los numeros del 1 al 10

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// 2)Imprime los numeros pares del 2 al 20

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 3)Imprime los numeros impares del 1 al 19

// for(let i = 1; i <= 19; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// 4)Imprime los numeros del 10 al 1, en orden inverso

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// 5)Imprime los numeros del 1 al 10, pero se detiene en el numero 5 BREAK

// for(let i = 1; i <= 10; i++){
//     console.log(i)
//     if(i === 5){
//         break
//     }
// }

// 6)Imprime los numeros del 1 al 10, pero se salta el 5 CONTINUE

// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         continue
//     }
//     console.log(i)
// }