import React from 'react';
import {render,screen} from '@testing-library/react'
import CardInverted from '../components/cards/CardInverted'
import '@testing-library/jest-dom/extend-expect'

test('<CardCinema/> test',()=>{

    render(<CardInverted/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H1');
    expect(screen.getByTestId('text').tagName).toBe('P');
    expect(screen.getByTestId('author').tagName).toBe('P');
})