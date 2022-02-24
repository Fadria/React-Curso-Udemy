import '@testing-library/jest-dom'; // Librería que incorpora los métodos y propiedades para poder obtener una ayuda correspondiente
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
    test("getSaludo debe de retornar Hola Federico!", () => {
        const nombre = "Federico";

        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect(saludo).toBe("Hola " + nombre + "!");  
    })

    test("getSaludo debe de retornar Hola Carlos! si no hay argumento nombre", () => {
        const saludo = getSaludo();
        console.log(saludo);

        expect(saludo).toBe("Hola Carlos!");      
    })
})