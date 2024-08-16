console.log("Hola Mundo");
// 1. acorde con la edad de una persona, imprime el año en que nació


function edad(){
    console.log("Ingresa tu edad");
    var numero1=prompt("edad");
    fecha = 2024-numero1;
    console.log("tu fecha de nacimiento es "+ fecha);
}
edad();

// función que toma un valor de grados celcius y la pasa a grados fahrenheit
function convercion(){
    console.log("Ingresa la temperatura que quieres pasar a grados fahrenheit");
    var temperatura = prompt("Temperatura");
    fahrenheit = (32+(9*temperatura/5));
    console.log("temperatura en grados fahrenheit "+fahrenheit);
}
convercion();

// Hay un articulo en promoción, si el cliente está entre los 20 primeros clientes, tiene un 30% de descuento.

function promocion(){
    var numero_cliente=prompt("numero de cliente");
    if (numero_cliente<=20){
        console.log("este cliente puede obtener un 30% de descuento");
    }
    if (numero_cliente>20 & numero_cliente<=50){
        console.log("este cliente puede obtener un 10% de descuento");
    }
    if (numero_cliente>50){
        console.log("este cliente no obtiene ningun descuento");
    }
}
promocion();

// función sin parametros sin retorno

function print(){
    console.log("hola a todos los que vean esto");
}
print();

// Función SIN PARAMETROS y CON RETORNO de VALOR
function suma(){
    return 10+3;
}

let sumita=suma();
console.log(sumita);

// función con parametros sin retorno
function saludo(nombre){
    console.log("Hola " + nombre, "esta es una funcion con parametros pero sin retorno");
}
saludo("luis")

// función con parametros y con retorno
function area_triangulo(base,altura){
    return ((base*altura)/2);
}
let area=area_triangulo(30,20);
console.log(area)