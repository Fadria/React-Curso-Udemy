// Agrupación de todas las pruebas de este fichero
describe("Pruebas en el archivo demo.test.js", () =>{

    // Nombre del test
    test( "Deben de ser iguales los string", () => {
        // 1. Inicialización
        const mensaje = "Hola Mundo";

        // 2. Estímulo
        const mensaje2 = `Hola Mundo`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // Internamente hace la comparación de equidad ===
    })

});