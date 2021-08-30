import React from 'react';
import {render,screen} from '@testing-library/react'
import CardRegular from '../components/cards/CardRegular'
import '@testing-library/jest-dom/extend-expect'

test('<CardCinema/> test',()=>{

    render(<CardRegular/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H3');
    expect(screen.getByTestId('author').tagName).toBe('P');
})