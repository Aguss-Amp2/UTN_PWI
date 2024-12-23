var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Accion.prototype.mostrarDetalle = function () {
        console.log("\n                ID: ".concat(this.id, "\n                Descripcion: ").concat(this.descripcion, "\n                Fecha: ").concat(this.fecha));
    };
    return Accion;
}());
var Cambio = /** @class */ (function () {
    function Cambio(id_cambio, valor_anterior, valor_nuevo) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.valor_nuevo = valor_nuevo;
    }
    Cambio.prototype.mostrarCambio = function () {
        console.log("\n            ID Cambio: ".concat(this.id_cambio, "\n            Valor Anterior: ").concat(this.valor_anterior, "\n            Nuevo Valor: ").concat(this.valor_nuevo));
    };
    return Cambio;
}());
var AccionIniciarSesion = /** @class */ (function (_super) {
    __extends(AccionIniciarSesion, _super);
    function AccionIniciarSesion(id, descripcion, fecha, dispositivo_de_origen) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_de_origen = dispositivo_de_origen;
        return _this;
    }
    AccionIniciarSesion.prototype.mostrarDetalle = function () {
        console.log("\n                ID: ".concat(this.id, "\n                Descripcion: ").concat(this.descripcion, "\n                Fecha: ").concat(this.fecha, "\n                Inicio de Sesion desde: ").concat(this.dispositivo_de_origen));
    };
    return AccionIniciarSesion;
}(Accion));
var AccionCierreSesion = /** @class */ (function (_super) {
    __extends(AccionCierreSesion, _super);
    function AccionCierreSesion(id, descripcion, fecha, dispositivo_de_origen, tiempo_de_sesion) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_de_origen = dispositivo_de_origen;
        _this.tiempo_de_sesion = tiempo_de_sesion;
        return _this;
    }
    AccionCierreSesion.prototype.mostrarDetalle = function () {
        console.log("\n                ID: ".concat(this.id, "\n                Descripcion: ").concat(this.descripcion, "\n                Fecha: ").concat(this.fecha, "\n                Cierre de Sesion desde: ").concat(this.dispositivo_de_origen, "\n                Duracion: ").concat(this.tiempo_de_sesion));
    };
    return AccionCierreSesion;
}(Accion));
var AccionActualizarPerfil = /** @class */ (function (_super) {
    __extends(AccionActualizarPerfil, _super);
    function AccionActualizarPerfil(id, descripcion, fecha, cambios) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.cambios = [];
        _this.cambios = cambios;
        return _this;
    }
    AccionActualizarPerfil.prototype.mostrarDetalle = function () {
        console.log("\n                Actualizacion de Perfil: ".concat(this.descripcion, "\n                ID: ").concat(this.id, "\n                Fecha: ").concat(this.fecha, "\n                Cambio Realizado"));
        this.cambios.forEach(function (cambio) { return cambio.mostrarCambio(); });
    };
    return AccionActualizarPerfil;
}(Accion));
var AccionCompra = /** @class */ (function (_super) {
    __extends(AccionCompra, _super);
    function AccionCompra(id, descripcion, fecha, productos, total) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.productos = [];
        _this.productos = productos;
        _this.total = total;
        return _this;
    }
    AccionCompra.prototype.mostrarDetalle = function () {
        console.log("\n                Compra Realizada:\n                ID: ".concat(this.id, "\n                Descripcion: ").concat(this.descripcion, "\n                Fecha: ").concat(this.fecha, "\n                Productos: ").concat(this.productos.join(', '), ", Total: ").concat(this.total));
    };
    return AccionCompra;
}(Accion));
var AccionEnviarMensaje = /** @class */ (function (_super) {
    __extends(AccionEnviarMensaje, _super);
    function AccionEnviarMensaje(id, descripcion, fecha, destinatario, mensaje) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.destinatario = destinatario;
        _this.mensaje = mensaje;
        return _this;
    }
    AccionEnviarMensaje.prototype.mostrarDetalle = function () {
        console.log("\n                Mensaje Enviado:\n                ID: ".concat(this.id, "\n                Descripcion: ").concat(this.descripcion, "\n                Fecha: ").concat(this.fecha, "\n                Destinatario: ").concat(this.destinatario, "\n                Mensaje: ").concat(this.mensaje));
    };
    return AccionEnviarMensaje;
}(Accion));
var Historial = /** @class */ (function () {
    function Historial() {
        this.acciones = [];
    }
    Historial.prototype.agregarAccion = function (accion) {
        this.acciones.push(accion);
    };
    Historial.prototype.eliminarAccionPorID = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; });
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
    };
    Historial.prototype.mostrarHistorial = function () {
        if (this.acciones.length === 0) {
            console.log("El historial está vacío.");
        }
        else {
            console.log("Historial de acciones:");
            this.acciones.forEach(function (accion) { return accion.mostrarDetalle(); });
        }
    };
    return Historial;
}());
var historial = new Historial();
var accion1 = new AccionIniciarSesion(1, "Usuario Inicio de sesión", new Date(), "PC");
var accion2 = new AccionCierreSesion(2, "Usuario Cierre de sesión", new Date(), "PC", 120);
var accion3 = new AccionActualizarPerfil(3, "Usuario Actualizo email", new Date(), [new Cambio(1, "email@example.com", "newemail@example.com")]);
var accion4 = new AccionCompra(4, "Usuario Compra artículos", new Date(), ["Camiseta", "Pantalón"], 45.99);
var accion5 = new AccionEnviarMensaje(5, "Usuario Envío un mensaje", new Date(), "newemail@example.com", "Hola, ¿cómo estás?");
historial.agregarAccion(accion1);
historial.agregarAccion(accion2);
historial.agregarAccion(accion3);
historial.agregarAccion(accion4);
historial.agregarAccion(accion5);
historial.mostrarHistorial();
historial.eliminarAccionPorID(3);
console.log("\nTras eliminar la acción con ID 3:");
historial.mostrarHistorial();
historial.eliminarTodo();
console.log("\nTras eliminar todo el historial:");
historial.mostrarHistorial();
