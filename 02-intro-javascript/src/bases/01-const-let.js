// Variables y constantes

// Datos fijos
const nombre = 'Federico';
const apellido = 'Adria';

// Datos que cambiarán a lo largo del tiempo
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

// Estos valores sólo existen dentro del scope
if (true) {
    const nombre = 'Fede' // No hay dos variables que se llamen igual dentro del scope
    let valorDado = 6; // No tenemos error aunque usemos el mismo nombre de variable que uno anterior fuera del if
    console.log("Valor dentro del if: " + valorDado, nombre)
}