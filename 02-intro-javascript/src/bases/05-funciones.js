// Funciones en JS


/*
function saludar(nombre){
    return `Hola, ${nombre}`;
}

saludar = 30 // Sobreescribiríamos el valor saludar, el cual contiene la función

// Tendríamos un error, ya que saludar ahora no es una función, es el valor 30
console.log(saludar);
console.log(saludar("Elisa"));
*/

// Definición correcta de una función
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

// Esto ya nos daría un error diciendo que no podemos cambiar el valor saludar = 20

// Ejemplo de lambda
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// Si sólo disponemos de una línea podemos simplificar mucho el código
const saludar3 = (nombre) => `Hola, ${nombre}`;

// En este caso no le pasaremos ningún argumento
const saludar4 = () => `Hola!!!`;

// Mostramos los resultados de las funciones
console.log(saludar3("Eric"));
console.log(saludar4());


// En esta función devolvemos este objeto, no nos haría falta emplear el return
const getUser = () => 
({
    uid: 'ABC123',
    username: 'Diego47',
});

// Mostramos el objeto
const user = getUser();
console.log(user);

// EJERCICIO
// 1. Usar una función de flecha
// 2. Retornar un objeto implícito
// 3. Ejemplo de funcionamiento
/*
    FUNCIÓN A TRANSFORMAR
    function getUsuarioActivo(nombre){
        return {
            uid: 'ABC567',
            username: nombre,
        }
    };
*/

// SOLUCIÓN
const getUsuarioActivo = (nombre) =>
({
    uid: 'ABC567',
    username: nombre,
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);