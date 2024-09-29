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

/* 17)Se cuenta con la siguiente información:
	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
*/

// let tm = 5, tt = 6, tn = 11
// let total_tm = 0, total_tt = 0, total_tn = 0

// let resp = prompt('Quiere empezar el Programa? (si o no)')

// while(resp != 'no' || resp != 'No' || resp != 'NO'){
//     for(let i = 1; i <= tm; i++){
//         let edad = prompt('Ingrese su edad Turno Mañana:')
//         if(!isNaN(edad)){
//             total_tm += Number(edad)
//         }
//         else{
//             alert('ERROR: Ingrese su edad en numeros')
//             i--
//         }
//     }
//     for(let i = 1; i <= tt; i++){
//         let edad = prompt('Ingrese su edad Turno Tarde:')
//         if(!isNaN(edad)){
//             total_tt += Number(edad)
//         }
//         else{
//             alert('ERROR: Ingrese su edad en numeros')
//             i--
//         }
//     }
//     for(let i = 1; i <= tn; i++){
//         let edad = prompt('Ingrese su edad Turno Noche:')
//         if(!isNaN(edad)){
//             total_tn += Number(edad)
//         }
//         else{
//             alert('ERROR: Ingrese su edad en numeros')
//             i--
//         }
//     }

//     let prom_tm = total_tm / 5
//     let prom_tt = total_tt / 6
//     let prom_tn = total_tn / 11

//     alert(`El promedio de edad en el turno mañana es: ${prom_tm}`)
//     alert(`El promedio de edad en el turno tarde es: ${prom_tt}`)
//     alert(`El promedio de edad en el turno noche es: ${prom_tn}`)

//     if(prom_tm > prom_tn && prom_tm > prom_tt){
//     alert('El Turno con Mayor promedio es el TURNO MAÑANA')
//     }
//     else if(prom_tn > prom_tm && prom_tn > prom_tt){
//         alert('El Turno con Mayor promedio es el TURNO NOCHE')
//     }
//     else{
//         alert('El Turno con Mayor promedio es el TURNO TARDE')
//     }
//     break
// }

/* 18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.
d)	El valor acumulado de los números ingresados que son pares.
*/

// let cont_neg = 0, cont_pos = 0, cont_mult = 0, acum_par = 0

// for(let i = 1; i <= 10; i++){
//     let num = prompt('Ingrese su numero:')
//     if(!isNaN(num)){
//         if(num < 0){
//             cont_neg++
//         }
//         else if(num >= 0){
//             cont_pos++
//         }

//         if(num % 15 === 0){
//             cont_mult++
//         }

//         if(num % 2 === 0){
//             acum_par += Number(num)
//         }
//     }
// }

// console.log(`Cantidad de valores negativos: ${cont_neg}`);
// console.log(`Cantidad de valores positivos: ${cont_pos}`);
// console.log(`Cantidad de múltiplos de 15: ${cont_mult}`);
// console.log(`Valor acumulado de los números pares: ${acum_par}`);


/* 19)hacer un programa que lea los lados de 4 triángulos, e informar:
a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
b)	Cantidad de triángulos de cada tipo.
c)	Tipo de triángulo del que hay menor cantidad.
*/

// let equilatero = 0, escaleno = 0, isoseles = 0

// for(let i = 1; i <= 4; i++){
//     let lado1 = prompt(`Ingrese el lado de Triangulo N°${i}:`)
//     if(!isNaN(lado1)){
//         let lado2 = prompt(`Ingrese el lado de Triangulo N°${i}:`)
//         if(!isNaN(lado2)){
//             let lado3 = prompt(`Ingrese el lado de Triangulo N°${i}:`)
//             if(!isNaN(lado3)){
//                 if(lado1 === lado2 && lado1 === lado3){
//                     equilatero++
//                 }
//                 else if(lado1 != lado2 && lado2 != lado3){
//                     escaleno++
//                 }
//                 else{
//                     isoseles++
//                 }
//             }
//             else{
//                 alert('ERROR ingrese un NUMERO')
//                 i--
//             }
//         }
//         else{
//             alert('ERROR ingrese un NUMERO')
//             i--
//         }
//     }
//     else{
//         alert('ERROR ingrese un NUMERO')
//         i--
//     }
// }
// console.log(`Triangulos Isoseles hay: ${isoseles}`)
// console.log(`Triangulos Escaleno hay: ${escaleno}`)
// console.log(`Triangulos Equilatero hay: ${equilatero}`)


/* 20)hacer  una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
4 5 6 7 8 9 10
*/

// let menor = prompt('Ingrese el Numero mas chico:')
// let mayor = prompt('Ingrese el Numero mas Alto:')

// while(menor < mayor && !isNaN(menor) && !isNaN(mayor)){
//     for(let i = menor; i <= mayor; i++){
//         console.log(i)
//     }
//     break
// }
// if(isNaN(menor) || isNaN(mayor)){
//     alert('ERROR INGRESE UN NUMERO')
// }
// else if(menor > mayor){
//     alert('ERROR INGRESO MAL EL ORDEN PRIMERO VA EL MENOR')
// }

// 21)Hacer  una función que reciba tres enteros y retorne el promedio.

// function promedio(a, b, c){
//     let total = a + b + c
//     let promedio = total / 3

//     return promedio
// }

// console.log(promedio(8,5,10))


// 22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

// let total = 0, tot_suma = 0
// function sumarValores(a){
//     total += a
//     return total
// }

// for(let i = 1; i <= 5; i++){
//     let num = prompt('Ingrese su numero:')
//     if(!isNaN(num)){
//         tot_suma = sumarValores(Number(num))
//     }
//     else{
//         alert('ERROR INGRESE UN NUMERO')
//         i--
//     }
// }

// console.log(tot_suma)

/* 23)
hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡
*/

// function palabra(pal){
//     alert(`!¡ ${pal} ¡!`)
// }

// let frase = prompt('Ingrese una palabra:')

// palabra(frase)

// 24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

// function obtenerNombreCompleto(nombre, apellido){
//     alert(`Su Nombre completo es ${nombre} ${apellido}`)
// }

// let nombre = prompt('Ingrese su Nomnbre:')
// let apellido = prompt('Ingrese su Apellido:')

// obtenerNombreCompleto(nombre, apellido)