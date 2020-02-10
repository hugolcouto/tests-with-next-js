import React from 'react';
import { mount } from 'enzyme';
import Home from '../pages/index';

describe('Fazendo testes no Next JS com Jest e Enzyme', () => {
    it('Deve conter o texto "Welcome to Next.js!" dentro de um H1 no componente Index', () => {
        const wrap = mount(<Home />);

        expect(wrap.find('h1').text()).toEqual('Welcome to Next.js!');
    });
});
