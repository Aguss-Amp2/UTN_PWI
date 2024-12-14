var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha, nombre) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.nombre = nombre;
    }
    return Accion;
}());
var Historial = /** @class */ (function () {
    function Historial(id_historial) {
        this.lista_acciones = [];
        this.id_contador = 1;
        this.id_historial = id_historial;
    }
    Historial.prototype.agregarAccion = function (descripcion, fecha, nombre) {
        var nueva_accion = new Accion(this.id_contador, descripcion, fecha, nombre);
        this.id_contador += 1;
        this.lista_acciones.push(nueva_accion);
    };
    Historial.prototype.eliminarAccionPorID = function (id_buscado) {
        var accion_buscada = this.lista_acciones.find(function (accion_buscada) { return accion_buscada.id === id_buscado; });
        if (accion_buscada) {
            console.log('Accion ELIMINADA', accion_buscada);
            var posicion = this.lista_acciones.indexOf(accion_buscada);
            this.lista_acciones.splice(posicion, 1);
            return accion_buscada;
        }
        else {
            console.log('Ese id de Accion no EXISTE');
            return null;
        }
    };
    Historial.prototype.eliminarHistorial = function () {
        this.lista_acciones = [];
    };
    Historial.prototype.mostrarHistorial = function () {
        console.log(this.lista_acciones);
    };
    return Historial;
}());
var accion_1 = new Historial(1);
accion_1.agregarAccion('Mandar Mensaje', new Date(), 'Agustin');
accion_1.agregarAccion('Responder Mensaje', new Date(), 'Nicolas');
accion_1.agregarAccion('Visto', new Date(), 'Agustin');
accion_1.mostrarHistorial();
accion_1.eliminarAccionPorID(2);
accion_1.eliminarAccionPorID(4);
console.log('HISTORIALL ACTUALIZADO Eliminando por ID');
accion_1.mostrarHistorial();
accion_1.eliminarHistorial();
console.log('HISTORIALL ACTUALIZADO VACIO');
accion_1.mostrarHistorial();
