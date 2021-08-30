import React from 'react';
import {render,screen} from '@testing-library/react'
import CardNota from '../components/cards/CardNota'
import '@testing-library/jest-dom/extend-expect'

test('<CardCinema/> test',()=>{

    render(<CardNota/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H3');
    expect(screen.getByTestId('author').tagName).toBe('P');
})