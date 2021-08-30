import React from 'react';
import {render,screen} from '@testing-library/react'
import CardTop from '../components/cards/CardTop'
import '@testing-library/jest-dom/extend-expect'

test('<CardCinema/> test',()=>{

    render(<CardTop/>);

    expect(screen.getByTestId('titulo').tagName).toBe('H3');
    expect(screen.getByTestId('image').tagName).toBe('IMG');
})