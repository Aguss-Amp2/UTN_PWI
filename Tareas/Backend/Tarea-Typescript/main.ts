class Accion {
    id: number
    descripcion: string
    fecha: Date
    nombre: string

    constructor(id: number, descripcion: string, fecha: Date, nombre: string){
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
        this.nombre = nombre
    }
}

class Historial{
    lista_acciones : Accion[] = []
    id_contador : number = 1
    id_historial : number

    constructor(id_historial : number){
        this.id_historial = id_historial
    }

    agregarAccion(descripcion: string, fecha: Date, nombre: string){
        const nueva_accion = new Accion(this.id_contador, descripcion, fecha, nombre)
        this.id_contador += 1 
        this.lista_acciones.push(nueva_accion)
    }

    eliminarAccionPorID(id_buscado: number){
        const accion_buscada = this.lista_acciones.find((accion_buscada) => accion_buscada.id === id_buscado)

        if(accion_buscada){
            console.log('Accion ELIMINADA', accion_buscada)
            const posicion = this.lista_acciones.indexOf(accion_buscada)
            this.lista_acciones.splice(posicion, 1)
            return accion_buscada
        }
        else{
            console.log('Ese id de Accion no EXISTE')
            return null
        }
    }

    eliminarHistorial(){
        this.lista_acciones = []
    }

    mostrarHistorial(){
        console.log(this.lista_acciones)
    }
}

const accion_1 = new Historial(1)

accion_1.agregarAccion('Mandar Mensaje', new Date(), 'Agustin')
accion_1.agregarAccion('Responder Mensaje', new Date(), 'Nicolas')
accion_1.agregarAccion('Visto', new Date(), 'Agustin')


accion_1.mostrarHistorial()

accion_1.eliminarAccionPorID(2)
accion_1.eliminarAccionPorID(4)

console.log('HISTORIALL ACTUALIZADO Eliminando por ID')
accion_1.mostrarHistorial()


accion_1.eliminarHistorial()
console.log('HISTORIALL ACTUALIZADO VACIO')
accion_1.mostrarHistorial()