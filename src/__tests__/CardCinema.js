import React from 'react';
import {render,screen} from '@testing-library/react'
import CardCinema from '../components/cards/CardCinema'
import '@testing-library/jest-dom/extend-expect'

test('<CardCinema/> test',()=>{

    render(<CardCinema/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H1');
    expect(screen.getByTestId('image').tagName).toBe('IMG');
    expect(screen.getByTestId('author').tagName).toBe('P');

})