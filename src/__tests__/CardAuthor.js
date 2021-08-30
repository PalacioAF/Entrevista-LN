import React from 'react';
import {render,screen} from '@testing-library/react'
import CardAuthor from '../components/cards/CardAuthor'
import '@testing-library/jest-dom/extend-expect'

test('<CardAuthor/> test',()=>{

    render(<CardAuthor/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H1');
    expect(screen.getByTestId('author').tagName).toBe('P');

})