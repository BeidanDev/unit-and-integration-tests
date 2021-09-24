import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        const wrapper = shallow(<CounterApp />);
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
    }); 
});