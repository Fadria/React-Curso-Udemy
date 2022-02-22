/* eslint-disable react-hooks/rules-of-hooks */

// Desestructuración / Asignación desestructurante

// Definimos nuestro objeto
const persona = {
    nombre: 'Fede',
    edad: 25,
    clave: 'abc123'
};

// Mostramos sus datos
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/

// Extrae la propiedad entre llaves del objeto persona
const {nombre, edad, clave} = persona;
//console.log(nombre, edad, clave);

// Función donde mostraremos los datos elegidos de la persona
const useContext = ({nombre, edad, dni = '333333333G'}) => { // El dni es un valor por defecto
    //console.log(nombre, edad, dni)

    
    return {
        dni: dni,
        anyos: edad,
        rango: 'verde',
        latlng: {
            lat: 15.13123,
            lng: 56.2231
        }
    }
};

// Enviamos el objeto persona a la función
// Indicamos los campos que deseamos usar, también podemos sacar datos de otros objetos
const {dni, rango, latlng:{lat, lng}} = useContext(persona);

// Mostramos estos datos
console.log(dni, rango, lat, lng);