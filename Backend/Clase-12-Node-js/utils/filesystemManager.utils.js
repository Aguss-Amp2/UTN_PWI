const filesystem = require('fs')

// FORMA SYNCRONICA

// const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
//     try{
//         filesystem.writeFileSync(`${nombre_archivo}.json`, JSON.stringify(JSON_data), {encoding: 'utf8'})
//     }
//     catch(error){
//         console.error(`Error al crear el Archivo ${nombre_archivo}.json`)
//         console.log(error)
//     }
// }

const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
    filesystem.writeFile(
        `${nombre_archivo}.json`,
        JSON.stringify(JSON_data),
        { encoding: 'utf8' },
        (error) => { //El error es un objeto con el posible error de la funcion
            if(error){
                console.error('Error al escribir el Archivo')
            }
            else{
                console.log('Archivo Creado', nombre_archivo)
                filesystem.readFile(
                    `${nombre_archivo}.json`,
                    {encoding: 'utf8'},
                    (error, resultado) =>{
                        if(error){
                            console.error('Error al leer el archivo')
                        }
                        else{
                            console.log('Resultado:', resultado)
                        }
                    }
                )
            }
        }
    )
}

/*
Crear un archivo llamado numero_1.txt e ingresar dentro de ese archivo un numero
Crear un archivo llamado numero_2.txt e ingresar dentro de ese archivo un numero

Leer el archivo con Node.js numero_1.txt
Leer el archivo con Node.js numero_2.txt
Sumar ambos numeros
Escribir el resultado dentro de un archivo llamado resultado.txt
*/

/*
filesystem.readFile(
    './numero_1.txt',
    { encoding: 'utf8' },
    (error, resultado1) => {
        if (error) {
            console.error('No se pudo leer el Archivo TXT 1')
        }
        else {
            console.log('Numero 1: ', resultado1)
            filesystem.readFile(
                './numero_2.txt',
                {encoding: 'utf8'},
                (error, resultado2) => {
                    if(error){
                        console.error('No se pudo leer el Archivo TXT 2')
                    }
                    else{
                        console.log('Numero 2: ', resultado2)
                        filesystem.writeFile(
                            './resultado.txt',
                            JSON.stringify(Number(resultado1) + Number(resultado2)),
                            {encoding: 'utf8'},
                            (error) => {
                                if(error){
                                    console.error('No se pudo escribir el archivo Resultado')
                                }
                                else{
                                    console.log('Se creo el archivo resultado.txt')
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)
*/


// Forma Asincronica
const leerArchivo = async (nombre_archivo) =>{
    try{
        const result = await filesystem.promises.readFile(
            nombre_archivo,
            {encoding: 'utf8'}
        )
        return result
    }
    catch(error){
        console.error()
    }
}

const calcularSumatoriaDeArchivos =async () =>{
    const numero_1 = await leerArchivo('numero_1.txt')
    const numero_2 = await leerArchivo('numero_2.txt')
    const resultado =  Number(numero_1) + Number(numero_2)
    filesystem.promises.writeFile('resultado.txt', String(resultado), {encoding: 'utf-8'})
} 

calcularSumatoriaDeArchivos()

module.exports = {
    escribirArchivoJSON
}