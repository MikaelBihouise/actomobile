import React from 'react';
import CardBenevoles from './components/CardBenevoles';
import CardCharite from './components/CardCharite';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<CardBenevoles/>)
        .toJSON();
    expect(tree).toMatchInlineSnapshot();
});

it('renders correctly', () => {
    const tree = renderer
        .create(<CardCharite/>)
        .toJSON();
    expect(tree).toMatchInlineSnapshot();
});

