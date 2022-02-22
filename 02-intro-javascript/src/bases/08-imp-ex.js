// Importamos el fichero a usar, lo podríamos hacer escribiendo imp y usando el snippet
// Importamos los datos por defecto y además owners
import heroes, {owners} from '../data/heroes';

console.log(owners);

// Devolvemos el héroe que coincida con la id que recibe la función
const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

// Mostramos los personajes cuya id sea la enviada a la función (1 elemento devuelto)
console.log(getHeroeById(1));
console.log(getHeroeById(2));
console.log(getHeroeById(13));



// Devolvemos los héroes que pertenezcan al estudio indicado (varios elementos devueltos)
const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);

// Mostramos los héroes de estos dos estudios
console.log(getHeroesByOwner("DC"));
console.log(getHeroesByOwner("Marvel"));
