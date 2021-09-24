import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe de mostrar el mensaje "Hola, Soy Fido"', () => {
    //     const saludo = 'Hola, Soy Fido';

    //     const { getByText } = render(<PrimeraApp saludo={ saludo } />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Fido';
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });
});