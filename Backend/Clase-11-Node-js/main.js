let numero_1 = 4
let numero_2 = 10


const{sumar, restar} = require('./matematicas.js')

console.log(sumar(numero_1, numero_2))
console.log(restar(numero_1, numero_2))

/*
Crear un archivo dentro de una carpeta llamada utiles que se llame impuestos

Dentro de impuesto.js crear una funcion llamada calcularIVA que reciba un precio y devuelva el 21% de ese precio

Para finalizar invocar dentro de main.js a la funcion calcularIVA y mostrar el resultado en consola 
*/

// const {calcularIVA} = require('./impuestos.js')
// console.log(calcularIVA(99))


// function funcionProblematica(){
//     const numero_aleatorio = Math.random()
//     if(numero_aleatorio > 0.5){
//         console.log('La Accion es correcta')
//     }
//     else{
//         throw{message: 'No has tenido Suerte'}
//     }
// }

// try{
//     funcionProblematica()
// }
// catch(error){
//     console.log('Ocurrio un problema en la funcionProblematica()')
//     console.log(error)
// }

/*
Estamos en una fintech y trabajamos sobre el proceso de validacion de credenciales

vamos a llamar a la funcion validarCredenciales que internamente generara un numero random y si el numero es mayor a 0.5 devolvera un true en caso contrario emitira un error de mensaje de 'credenciales invalidas'

Si todo esta bien mandaremos un mensaje 'operacion realizada'

Si ocurre el error por consola de debera mostrar el mensaje error
*/

// function validarCredenciales(){
//     const num = Math.random()

//     if(num > 0.5){
//         return true
//     }else{
//         throw{message: 'Credenciales invalidas'}
//     }
// }

// try{
//     validarCredenciales()
//     console.log('Operacion Realizada')
// }
// catch(error){
//     console.log('Ocurrio un Problema con las Credenciales')
//     console.log(error)
// }

const {crearArchivo, leerArchivo} = require('./filesystem.js')

// crearArchivo('./test.txt', 'Hola mundo desde node.js')

// try{
//     console.log(leerArchivo('./test.txt'))
// }
// catch(error){
//     console.log(error)
// }

// const configuracion = {
//     nivel_seguridad: 3,
//     user_root: 'admin',
//     password_root: 'admin2025'
// }

// crearArchivo('./config.json', JSON.stringify(configuracion))

const modificarNivelSguridad = (nro_nivel) => {
    try{
        const configuracion = JSON.parse(leerArchivo('./config.json'))
        configuracion.nivel_seguridad = nro_nivel
        crearArchivo('./config.json', JSON.stringify(configuracion))
    }
    catch(error){
        console.error('Error al modificar el nivel de segurirdad', error)
    }
}

modificarNivelSguridad(5)