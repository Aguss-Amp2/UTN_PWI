var numero_1 = 1;
var numero_2 = 10;
var resultado = numero_1 + numero_2;
//Tipado estatico
var nombre = 'pepe';
nombre = null;
//Any es un tipo de dato que abarca a todos los tipos de datos
var datoAleatorio = 1;
datoAleatorio = undefined;
datoAleatorio = null;
datoAleatorio = [];
//Typescript infirio o 'entendio' que la edad es un numero (porque le asigne un 20)
var edad = 20;
//void = vacio significa que mi funcion NO tiene retorno
var saludar = function (nombre) {
    console.log('Hola ' + nombre + '!');
};
var obtenerSaludo = function (nombre) {
    return 'Hola ' + nombre + '!';
};
var obtenerMensajePorId = function (id) {
    var mensajes = [];
    return mensajes.find(function () { }); //puede retornar mensaje o undefined
};
var funcionX = function () {
};
var resultado2 = saludar('pepe');
console.log(resultado2);
var persona = {
    nombre: 'pepe',
    edad: 50,
    id: 1,
    dinero: 20
};
var persona2 = {
    nombre: 'julian',
    edad: 20,
    id: 2,
    dinero: 400
};
var saludarAPersona = function (persona) {
};
saludarAPersona({ nombre: 'pepe', edad: 20, id: 1, dinero: 1 });
var nombres_que_no_me_gustan = ['Pepe', 'Juan', 'Maria'];
var notas_del_trimestre = [1, 4, 7, 10];
var random = [0, {}, function () { }];
var persona4 = ['pepe', 70];
var personas = [];
