class Accion {
    id: number
    descripcion: string
    fecha: Date

    constructor(id: number, descripcion: string, fecha: Date) {
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }

    mostrarDetalle(): void {
        console.log(`
                ID: ${this.id}
                Descripcion: ${this.descripcion}
                Fecha: ${this.fecha}`
        )
    }
}

class Cambio {
    id_cambio: number
    valor_anterior: string
    valor_nuevo: string

    constructor(id_cambio: number, valor_anterior: string, valor_nuevo: string) {
        this.id_cambio = id_cambio
        this.valor_anterior = valor_anterior
        this.valor_nuevo = valor_nuevo
    }

    mostrarCambio() {
        console.log(`
            ID Cambio: ${this.id_cambio}
            Valor Anterior: ${this.valor_anterior}
            Nuevo Valor: ${this.valor_nuevo}`
        )
    }
}

class AccionIniciarSesion extends Accion {
    dispositivo_de_origen: string

    constructor(id: number, descripcion: string, fecha: Date, dispositivo_de_origen: string) {
        super(id, descripcion, fecha)
        this.dispositivo_de_origen = dispositivo_de_origen
    }

    mostrarDetalle(): void {
        console.log(`
                ID: ${this.id}
                Descripcion: ${this.descripcion}
                Fecha: ${this.fecha}
                Inicio de Sesion desde: ${this.dispositivo_de_origen}`
        )
    }

}

class AccionCierreSesion extends Accion {
    dispositivo_de_origen: string
    tiempo_de_sesion: number

    constructor(id: number, descripcion: string, fecha: Date, dispositivo_de_origen: string, tiempo_de_sesion: number) {
        super(id, descripcion, fecha)
        this.dispositivo_de_origen = dispositivo_de_origen
        this.tiempo_de_sesion = tiempo_de_sesion
    }

    mostrarDetalle(): void {
        console.log(`
                ID: ${this.id}
                Descripcion: ${this.descripcion}
                Fecha: ${this.fecha}
                Cierre de Sesion desde: ${this.dispositivo_de_origen}
                Duracion: ${this.tiempo_de_sesion}`
        )
    }

}

class AccionActualizarPerfil extends Accion {
    cambios: Cambio[] = []

    constructor(id: number, descripcion: string, fecha: Date, cambios: Cambio[]) {
        super(id, descripcion, fecha)
        this.cambios = cambios
    }

    mostrarDetalle(): void {
        console.log(`
                Actualizacion de Perfil: ${this.descripcion}
                ID: ${this.id}
                Fecha: ${this.fecha}
                Cambio Realizado`
        )
        this.cambios.forEach((cambio) => cambio.mostrarCambio())
    }

}

class AccionCompra extends Accion {
    productos: string[] = []
    total: number
    constructor(id: number, descripcion: string, fecha: Date, productos: string[], total: number) {
        super(id, descripcion, fecha)
        this.productos = productos
        this.total = total
    }

    mostrarDetalle(): void {
        console.log(`
                Compra Realizada:
                ID: ${this.id}
                Descripcion: ${this.descripcion}
                Fecha: ${this.fecha}
                Productos: ${this.productos.join(', ')}, Total: ${this.total}`
        )
    }
}

class AccionEnviarMensaje extends Accion {
    destinatario: string
    mensaje: string

    constructor(id: number, descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
        super(id, descripcion, fecha)
        this.destinatario = destinatario
        this.mensaje = mensaje
    }

    mostrarDetalle(): void {
        console.log(`
                Mensaje Enviado:
                ID: ${this.id}
                Descripcion: ${this.descripcion}
                Fecha: ${this.fecha}
                Destinatario: ${this.destinatario}
                Mensaje: ${this.mensaje}`
        )
    }
}


class Historial {
    private acciones: Accion[] = []

    agregarAccion(accion: Accion): void {
        this.acciones.push(accion)
    }

    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter((accion) => accion.id !== id)
    }

    eliminarTodo(): void {
        this.acciones = []
    }

    mostrarHistorial(): void {
        if (this.acciones.length === 0) {
            console.log("El historial está vacío.")
        } else {
            console.log("Historial de acciones:")
            this.acciones.forEach((accion) => accion.mostrarDetalle())
        }
    }
}

const historial = new Historial()

const accion1 = new AccionIniciarSesion(1, "Usuario Inicio de sesión", new Date(), "PC")
const accion2 = new AccionCierreSesion(2, "Usuario Cierre de sesión", new Date(), "PC", 120)
const accion3 = new AccionActualizarPerfil(3, "Usuario Actualizo email",new Date(), [new Cambio(1, "email@example.com", "newemail@example.com")])
const accion4 = new AccionCompra(4, "Usuario Compra artículos", new Date(), ["Camiseta", "Pantalón"], 45.99)
const accion5 = new AccionEnviarMensaje(5, "Usuario Envío un mensaje", new Date(), "newemail@example.com", "Hola, ¿cómo estás?")

historial.agregarAccion(accion1)
historial.agregarAccion(accion2)
historial.agregarAccion(accion3)
historial.agregarAccion(accion4)
historial.agregarAccion(accion5)

historial.mostrarHistorial()
historial.eliminarAccionPorID(3)
console.log("\nTras eliminar la acción con ID 3:")
historial.mostrarHistorial()

historial.eliminarTodo()
console.log("\nTras eliminar todo el historial:")
historial.mostrarHistorial()