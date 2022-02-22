import { getHeroeById } from "./data/obtenerHeroes";

// Ejemplo básico de una promesa, que se ejecutará de forma asíncrona, se ejucutará después de todo el código
/*const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // Tarea: obtener los datos del fichero obtenerHeroes.js de forma asíncrona
        const heroe = getHeroeById(2);

        console.log("2 segundos más tarde")
        resolve(heroe); // El resolve notificaría al código que esté esperando la promesa
        reject("No se pudo encontrar el héroe");
    }, 2000) // esperaremos 2 segundos
});

promesa.then((datos) => {
    console.log("Héroe: " + datos.name)
}).catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // Tarea: obtener los datos del fichero obtenerHeroes.js de forma asíncrona
            const heroe = getHeroeById(id);
    
            console.log("2 segundos más tarde");
            console.log(heroe);

            if(heroe){
                resolve(heroe); // El resolve notificaría al código que esté esperando la promesa
            }else{
                reject("No se pudo encontrar el héroe"); // Informamos del error que ha sucedido mediante un string
            }
        }, 2000) // esperaremos 2 segundos
    });
}

// EJEMPLO 1: Héroe encontrado
getHeroeByIdAsync(2)
    .then( console.log ) // Si encontramos el héroe mostramos sus datos
    .catch(console.warn); // Si no indicamos nada entre paréntesis se mandaría automáticamente el primer dato

// EJEMPLO 2: Héroe no encontrado
getHeroeByIdAsync(10)
    .then( datos => console.log("Héroe: " + datos.id)) // Si encontramos el héroe mostramos sus id
    .catch(console.warn); // Si no indicamos nada entre paréntesis se mandaría automáticamente el primer dato