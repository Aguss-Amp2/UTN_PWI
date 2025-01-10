const filesystem = require('fs')

const crearArchivo = (nombre, contenido) =>{
    try{
        filesystem.writeFileSync(nombre, contenido, {encoding: 'utf-8'})
    }
    catch(error){
        console.log('El Archivo no se pudo crear')
        console.log(error)
    }
}

const leerArchivo = (nombre) =>{
    try{
        const result = filesystem.readFileSync(nombre, {encoding: 'utf-8'})
        return result
    }
    catch(error){
        console.error('Error en Leer el Archivo', error)
        throw{message: 'Error al Lee el Archivo'}
    }
}

module.exports = {
    crearArchivo,
    leerArchivo
}