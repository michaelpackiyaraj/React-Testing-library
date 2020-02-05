import React from "react";
import ReactDOM from 'react-dom';
import Button from './../';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crasing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("render button correctly", ()=>{
    const { getByTestId } = render(<Button label="click me"></Button>);
    expect(getByTestId('button')).toHaveTextContent("click me");
})