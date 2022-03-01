import { shallow } from "enzyme"
import CounterApp from "../CounterApp";
import React from 'react';

describe("Pruebas en el <CounterApp />", () => {

    let wrapper = shallow(<CounterApp />);

    // Función que se ejecuta con cada test
    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test("Debe de mostrar <CounterApp /> correctamente", () =>{
        expect(wrapper).toMatchSnapshot();
    })

    test("Debe de mostrar el valor por defecto de 100", () =>{
        const wrapper = shallow(<CounterApp value={100}/>);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
    })

    test("Debe de incrementar con el botón +1", () =>{
        const btn1 = wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('1');
    })

    // Las pruebas se ejecutan una detrás de otra, en este caso pasaríamos del valor 1 al 0 ya que en la anterior sumamos
    test("Debe de incrementar con el botón -1", () =>{
        const btn1 = wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('0');
    })
})