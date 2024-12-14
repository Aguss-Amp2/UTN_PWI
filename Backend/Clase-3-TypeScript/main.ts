class Vehiculo {
    //Tipamos las propiedades del vehiculo
    marca : string
    precio : number
    modelo : string
    km_por_hora : number
    terreno: string
    anios_antiguedad: number
    precio_original: number

    //Tipamos los parametros de la funcion constructora
    //La funcion constructora recibe los valores para CREAR un nuevo obj
    constructor(
        marca : string, 
        precio : number, 
        modelo : string, 
        km_por_hora : number,
        anios_antiguedad: number 
    ){
        this.marca = marca
        this.anios_antiguedad = anios_antiguedad
        this.precio_original = precio
        this.precio = precio - precio * (0.05 * this.anios_antiguedad)
        this.modelo = modelo
        this.km_por_hora = km_por_hora
        this.terreno = 'TIERRA'
    }

    moverse(horas: number) : void{
        console.log(`El vehiculo ${this.modelo} a recorrido ${horas * this.km_por_hora} km!!`)
    }
}

const renault12 = new Vehiculo('Reanult', 400000, 'Renault 12', 130, 3)

console.log(renault12)
renault12.moverse(5)

class Bicicleta extends Vehiculo {
    cantidad_ruedas : number = 2
    tipo_freno : string

    constructor(marca: string, precio: number, modelo: string, km_por_hora: number, anios_antiguedad: number, tipo_freno: string){
        super(marca, precio, modelo, km_por_hora, anios_antiguedad)
        this.tipo_freno = tipo_freno
    }
}

//Crear la class para hacer empleados
/* 
nombre
sueldo
fecha_contratacion
id_empleado
puesto

presentarse(){} es un metodo que hara una pequeña presentacion del empleado por consola
*/

type Puesto = 'Desarrollador' | 'Programador' | 'RH' | 'Marketing'

class Empleado {
    nombre : string
    sueldo : number
    fecha_contratacion : Date
    id_empleado : number
    puesto : Puesto

    constructor(nombre : string, sueldo : number, puesto : Puesto, id_empleado : number , fecha_contratacion : Date){
        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_contratacion = fecha_contratacion
        this.id_empleado = id_empleado
        this.puesto = puesto
    }

    presentarse() : void {
        console.log(`Mi nombre es ${this.nombre}, me contrataron el ${this.fecha_contratacion.toDateString()} para el puesto de ${this.puesto}, con un sueldo de $ ${this.sueldo} `)
    }
}

const empleado = new Empleado('Agustin', 500000, 'Programador', 1021, new Date('2024/06/14'))

empleado.presentarse()

/* 
Crear la clase del pasante (que herede del Empleado) que tendra

nombre
sueldo
fecha_contratacion
id_empleado
puesto
tiempo_de_contrato_en_meses
*/

class Pasante extends Empleado {
    tiempo_de_contrato : number = 6

    constructor(nombre : string, sueldo : number, puesto : Puesto, id_empleado : number , fecha_contratacion : Date){
        super(nombre, sueldo, puesto, id_empleado, fecha_contratacion)
    }

    presentarse() : void {
        console.log(`Mi nombre es ${this.nombre}, me contrataron el ${this.fecha_contratacion.toDateString()} para el puesto de ${this.puesto}, con un sueldo de $ ${this.sueldo} y mi tiempo de contrato es de ${this.tiempo_de_contrato} meses. `)
        if(this.puesto == 'Desarrollador'){
            console.log('Git push a Produccion')
        }
        else{
            console.log('Pasante intenta usar la impresora')
        }
    }
}

const pasante = new Pasante('Juliana', 300000, 'Desarrollador', 1021, new Date('2024/10/14'))
pasante.presentarse()


class ManejadorEmpleado {
    empleados : Empleado[] = []
    id_counter : number = 1
    id_manejador : number

    constructor(id_manejador: number){
        this.id_manejador = id_manejador
    }

    //Agregar Empleado
    agregarEmpleado(
            nombre : string, 
            sueldo : number, 
            fecha_contratacion : Date, 
            puesto : Puesto
        ) : void {
        
        //Creamos el nuevo empleado y le damos un id
        const nuevo_empleado = new Empleado(nombre, sueldo, puesto, this.id_counter, fecha_contratacion,)
        //Actualizo el id para el siguiente empleado
        this.id_counter = this.id_counter + 1
        //Agrego al empleado a la lista empleados
        this.empleados.push(nuevo_empleado)
    }


    // Obtener Empleado por id (devolvera el empleado encontrado o null en caso de no existir) TIP: usen find

    obtenerEmpleado(id_empleado: number): Empleado | null {
        const empleado = this.empleados.find(
            (empleado) => empleado.id_empleado === id_empleado
        )
    
        if (empleado) {
            console.log('Empleado encontrado', empleado)
            return empleado
        } else {
            console.log('null')
            return null
        }
    }

}

const manejadorEmpleado_Empresa_A = new ManejadorEmpleado(1)
const manejadorEmpleado_Empresa_B = new ManejadorEmpleado(2)

manejadorEmpleado_Empresa_A.agregarEmpleado('Maria', 500000, new Date(), 'Marketing')
manejadorEmpleado_Empresa_A.agregarEmpleado('Martin', 800000, new Date(), 'RH')

manejadorEmpleado_Empresa_A.obtenerEmpleado(1)
manejadorEmpleado_Empresa_A.obtenerEmpleado(3)


/*
    empleados: [],
    id_counter: number = 0,
    id_manejador: number = 1
 */