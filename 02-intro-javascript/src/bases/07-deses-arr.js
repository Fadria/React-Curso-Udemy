// Arreglo de Strings
const personas = ['Diego', 'Santiago', 'Ismael'];

// Forma lenta de mostrar los datos
/*console.log(personas[0]);
console.log(personas[1]);
console.log(personas[2]);*/

// Si ponemos la coma ignoraríamos la posición del elemento
const [,p2,p3] = personas;
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo valor se llamará setNombre, aunque no tenga esta funcionalidad implementada y simplemente sea un log
const miFuncion = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

// Damos un identificador a cada posición
const [nombre, setNombre] = miFuncion("Fede");

// Mostramos el primer valor
console.log(nombre);

// Ejecutamos la función del segundo valor
setNombre();