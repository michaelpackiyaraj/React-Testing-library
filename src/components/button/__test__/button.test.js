import React from "react";
import ReactDOM from 'react-dom';
import Button from './../';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

it("renders without crasing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("render button correctly", ()=>{
    const { getByTestId } = render(<Button label="click me"></Button>);
    expect(getByTestId('button')).toHaveTextContent("click me");
})

it("render save button correctly", ()=>{
    const { getByTestId } = render(<Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("save");
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});