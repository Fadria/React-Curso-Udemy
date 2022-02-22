// Constante que contiene los datos de una persona
const persona = {
    // Datos de la persona
    nombre: 'Federico',
    apellido: 'Adria',
    edad: 25,
    
    // Su atributo dirección es un objeto
    direccion: {
        ciudad: 'Torrent',
        zip: 46900,
        lat: 55413,
        lng: 331231.43
    }
};

// Mostramos los datos en un formato más atractivo
console.table(persona);

// Obtenemos el nombre de la variable al tenerlo entre llaves
console.log({persona});

// Mostramos únicamente el atributo nombre
console.log(persona.nombre);

// Hacemos una copia de persona, si simplemente lo igualásemos sería una referencia
const persona2 = {
    ...persona // Mediante el spread hacemos la copia completa de todos los atributos de persona
};

// Cambiamos el nombre de segundo objeto
persona2.nombre = "Antonio"

// Comprobamos que realmente tenemos dos objetos distintos
console.log(persona);
console.log(persona2);