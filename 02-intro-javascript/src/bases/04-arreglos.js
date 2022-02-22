// Arreglos en JS

/*const arreglo = new Array(100); // Indicamos las posiciones que este tendrá
arreglo.push(4); // Al hacer un push tendríamos 101, por lo que se sigue expandiendo */

// Definimos nuestro primer arreglo
const arreglo = [1,2,3,4];

// El push modifica el objeto(arreglo) principal, por lo que no es recomendable
/*arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);*/

// El segundo será una copia del primero añadiendo el valor 5
let arreglo2 = [...arreglo, 5];

// El tercero serán los valores del segundo duplicados
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2
});

// Mostramos los arreglos por consola
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)