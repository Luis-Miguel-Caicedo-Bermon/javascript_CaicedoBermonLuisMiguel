console.log("Hola Mundo");
// 1. acorde con la edad de una persona, imprime el año en que nació


function edad(){
    console.log("Ingresa tu edad")
    var numero1=prompt("edad")
    fecha = 2024-numero1
    console.log("tu fecha de nacimiento es "+ fecha)
}
edad()

// función que toma un valor de grados celcius y la pasa a grados fahrenheit
function convercion(){
    console.log("Ingresa la temperatura que quieres pasar a grados fahrenheit")
    var temperatura = prompt("Temperatura")
    fahrenheit = (32+(9*temperatura/5))
    console.log("temperatura en grados fahrenheit "+fahrenheit)
}
convercion()

// Hay un articulo en promoción, si el cliente está entre los 20 primeros clientes, tiene un 30% de descuento.

function promocion(){
    var numero_cliente=prompt("numero de cliente")
    if (numero_cliente<=20){
        console.log("este cliente puede obtener un 30% de descuento")
    }
    if (numero_cliente>20 & numero_cliente<=50){
        console.log("este cliente puede obtener un 10% de descuento")
    }
    if (numero_cliente>50){
        console.log("este cliente no obtiene ningun descuento")
    }
}
promocion()