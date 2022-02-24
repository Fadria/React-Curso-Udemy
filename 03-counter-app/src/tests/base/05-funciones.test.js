import '@testing-library/jest-dom'; // Librería que incorpora los métodos y propiedades para poder obtener una ayuda correspondiente
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => 
{
    test("getUser debe de retornar un objeto", () => {
        const userTest = ({
            uid: 'ABC123',
            username: 'El_Papi1502'
        });

        const user = getUser();
        console.log(user);

        // Para comparar las propiedades de objetos deberemos usar toEqual
        expect(user).toEqual(userTest)
    })

    test("getUsuarioActivo debe de retornar un objeto", () => {
        const userTest = ({
            uid: 'ABC567',
            username: 'Diego'
        });

        const user = getUsuarioActivo("Diego");

        // Para comparar las propiedades de objetos deberemos usar toEqual
        expect(user).toEqual(userTest)
    })
})