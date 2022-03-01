import React from 'react';
//import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe("Pruebas en <PrimeraApp />", () => {
    /*test('Debe de mostrar el mensaje "Hola desde el index.js"', () => {
        const saludo = "Hola desde el index.js";

        const {getByText} = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    })*/

    test("Debe de mostrar <PrimeraApp /> correctamente", () => {
        const saludo = "Hola desde el index.js";
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    })
})