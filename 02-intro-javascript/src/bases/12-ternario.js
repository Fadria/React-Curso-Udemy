const activo = true;

//let mensaje = "";

// CASO 1: Usando IF
/*
if(activo) {
    mensaje = "Activo";
}else{
    mensaje = "Inactivo";
}*/

// CASO 2: Usando el operador condicional ternario

// Operador ternario donde devolvemos un valor u otro
// const mensaje = (activo) ? "Activo" : "Inactivo";

// Operador ternario donde devolvemos un valor o null
// const mensaje = (activo) ? "Activo" : null;

// En este caso sólo devolveremos una opción
const mensaje = activo && "Activo"; // Es una forma corta de hacer un if

console.log(mensaje);