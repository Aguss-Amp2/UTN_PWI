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
var Vehiculo = /** @class */ (function () {
    //Tipamos los parametros de la funcion constructora
    //La funcion constructora recibe los valores para CREAR un nuevo obj
    function Vehiculo(marca, precio, modelo, km_por_hora, anios_antiguedad) {
        this.marca = marca;
        this.anios_antiguedad = anios_antiguedad;
        this.precio_original = precio;
        this.precio = precio - precio * (0.05 * this.anios_antiguedad);
        this.modelo = modelo;
        this.km_por_hora = km_por_hora;
        this.terreno = 'TIERRA';
    }
    Vehiculo.prototype.moverse = function (horas) {
        console.log("El vehiculo ".concat(this.modelo, " a recorrido ").concat(horas * this.km_por_hora, " km!!"));
    };
    return Vehiculo;
}());
var renault12 = new Vehiculo('Reanult', 400000, 'Renault 12', 130, 3);
console.log(renault12);
renault12.moverse(5);
var Bicicleta = /** @class */ (function (_super) {
    __extends(Bicicleta, _super);
    function Bicicleta(marca, precio, modelo, km_por_hora, anios_antiguedad, tipo_freno) {
        var _this = _super.call(this, marca, precio, modelo, km_por_hora, anios_antiguedad) || this;
        _this.cantidad_ruedas = 2;
        _this.tipo_freno = tipo_freno;
        return _this;
    }
    return Bicicleta;
}(Vehiculo));
var Empleado = /** @class */ (function () {
    function Empleado(nombre, sueldo, puesto, id_empleado, fecha_contratacion) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_contratacion = fecha_contratacion;
        this.id_empleado = id_empleado;
        this.puesto = puesto;
    }
    Empleado.prototype.presentarse = function () {
        console.log("Mi nombre es ".concat(this.nombre, ", me contrataron el ").concat(this.fecha_contratacion.toDateString(), " para el puesto de ").concat(this.puesto, ", con un sueldo de $ ").concat(this.sueldo, " "));
    };
    return Empleado;
}());
var empleado = new Empleado('Agustin', 500000, 'Programador', 1021, new Date('2024/06/14'));
empleado.presentarse();
/*
Crear la clase del pasante (que herede del Empleado) que tendra

nombre
sueldo
fecha_contratacion
id_empleado
puesto
tiempo_de_contrato_en_meses
*/
var Pasante = /** @class */ (function (_super) {
    __extends(Pasante, _super);
    function Pasante(nombre, sueldo, puesto, id_empleado, fecha_contratacion) {
        var _this = _super.call(this, nombre, sueldo, puesto, id_empleado, fecha_contratacion) || this;
        _this.tiempo_de_contrato = 6;
        return _this;
    }
    Pasante.prototype.presentarse = function () {
        console.log("Mi nombre es ".concat(this.nombre, ", me contrataron el ").concat(this.fecha_contratacion.toDateString(), " para el puesto de ").concat(this.puesto, ", con un sueldo de $ ").concat(this.sueldo, " y mi tiempo de contrato es de ").concat(this.tiempo_de_contrato, " meses. "));
        if (this.puesto == 'Desarrollador') {
            console.log('Git push a Produccion');
        }
        else {
            console.log('Pasante intenta usar la impresora');
        }
    };
    return Pasante;
}(Empleado));
var pasante = new Pasante('Juliana', 300000, 'Desarrollador', 1021, new Date('2024/10/14'));
pasante.presentarse();
var ManejadorEmpleado = /** @class */ (function () {
    function ManejadorEmpleado(id_manejador) {
        this.empleados = [];
        this.id_counter = 1;
        this.id_manejador = id_manejador;
    }
    //Agregar Empleado
    ManejadorEmpleado.prototype.agregarEmpleado = function (nombre, sueldo, fecha_contratacion, puesto) {
        //Creamos el nuevo empleado y le damos un id
        var nuevo_empleado = new Empleado(nombre, sueldo, puesto, this.id_counter, fecha_contratacion);
        //Actualizo el id para el siguiente empleado
        this.id_counter = this.id_counter + 1;
        //Agrego al empleado a la lista empleados
        this.empleados.push(nuevo_empleado);
    };
    // Obtener Empleado por id (devolvera el empleado encontrado o null en caso de no existir) TIP: usen find
    ManejadorEmpleado.prototype.obtenerEmpleado = function (id_empleado) {
        var empleado = this.empleados.find(function (empleado) { return empleado.id_empleado === id_empleado; });
        if (empleado) {
            console.log('Empleado encontrado', empleado);
            return empleado;
        }
        else {
            console.log('null');
            return null;
        }
    };
    return ManejadorEmpleado;
}());
var manejadorEmpleado_Empresa_A = new ManejadorEmpleado(1);
var manejadorEmpleado_Empresa_B = new ManejadorEmpleado(2);
manejadorEmpleado_Empresa_A.agregarEmpleado('Maria', 500000, new Date(), 'Marketing');
manejadorEmpleado_Empresa_A.agregarEmpleado('Martin', 800000, new Date(), 'RH');
manejadorEmpleado_Empresa_A.obtenerEmpleado(1);
manejadorEmpleado_Empresa_A.obtenerEmpleado(3);
/*
    empleados: [],
    id_counter: number = 0,
    id_manejador: number = 1
 */ 
