import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un héroe por id', () => 
    {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si Héroe no existe', () => 
    {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    // TAREA
    // debe de retornar un arreglo con los héroes de DC
    // owner
    // toEqual al arreglo filtrado

    // Debe de retornar un arreglo con los héroes de Marvel
    // length = 2 con un toBe

    test("Debe de retornar un arreglo con los héroes de DC", () => {
        const owner = "DC";
        const arreglo = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);
        expect(arreglo).toEqual(heroesData);
    })

    test("Debe de retornar un arreglo con los héroes de Marvel", () => {
        const owner = "Marvel";
        const arreglo = getHeroesByOwner(owner);

        expect(arreglo.length).toBe(2);
    })

})