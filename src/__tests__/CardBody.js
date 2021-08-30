import React from 'react';
import {render,screen} from '@testing-library/react'
import CardBody from '../components/cards/CardBody'
import '@testing-library/jest-dom/extend-expect'

test('<CardAuthor/> test',()=>{

    render(<CardBody/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H1');
    expect(screen.getByTestId('text').tagName).toBe('P');
    expect(screen.getByTestId('author').tagName).toBe('P');

})