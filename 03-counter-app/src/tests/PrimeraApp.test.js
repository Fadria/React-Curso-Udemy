import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
    test('Debe de mostrar el mensaje "Hola desde el index.js"', () => {
        const saludo = "Hola desde el index.js";

        const {getByText} = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    })
})