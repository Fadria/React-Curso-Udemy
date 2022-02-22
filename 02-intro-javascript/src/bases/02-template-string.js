// Definimos dos cadenas
const nombre = 'Federico';
const apellido = 'Adria';

// Con el template string las juntaríamos sin el +, también podemos realizar operaciones y al pulsar enter saltaríamos de línea
const nombreCompleto = `${nombre} ${apellido}
${1+1}`;
console.log(nombreCompleto);

// También es posible llamar a funciones desde el template string
console.log(`Este es un texto: ${getSaludo(nombre)}`)

// Función que saluda al valor que reciba o undefined si este no es recibido
function getSaludo(nombre){
    return "Hola " + nombre;
}