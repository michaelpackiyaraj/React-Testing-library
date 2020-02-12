import React from "react";
import ReactDOM from 'react-dom';
import Button from './../';

import { render, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

describe("Buttons render", () => {
    it("renders without crasing", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(<Button></Button>, div);
    })
    
    it("render button correctly", ()=>{
        const { getByTestId } = render(<Button label="click me"></Button>);
        expect(getByTestId('button')).toHaveTextContent("click me");
    })

    it("button click callback function", ()=>{
        const spy = jest.fn(() => "clicked");
        const { getByTestId } = render(<Button onClick = {spy} label="click me"></Button>);
        expect(getByTestId('button')).toHaveTextContent("click me");
        fireEvent.click(getByTestId('button'));
        expect(getByTestId('button')).toHaveTextContent("clicked");
       // expect(spy).toHaveBeenCalled();

    })
    
    it("render save button correctly", ()=>{
        const { getByTestId } = render(<Button label="save"></Button>);
        expect(getByTestId('button')).toHaveTextContent("save");
    })
    
    it("Default Count value", () => {
        const { getByTestId } = render(<Button label="save"></Button>);
        expect(getByTestId('count')).toHaveTextContent("0");
    });
    it("Increment Count value", () => {
        const { getByTestId, getByText } = render(<Button label="save"></Button>);
        fireEvent.click(getByText('Up'));
        const add = jest.fn(() => 3);
        expect(getByTestId('count')).toHaveTextContent("1");
        expect(add(1,2)).toBe(3);
        expect(add(3,4)).toBe(3);
        expect(add).toHaveBeenCalled();
        expect(add).toHaveBeenCalledTimes(2);
        expect(add).toHaveBeenCalledWith(3,4);
    });
    it("Decrement Count value", async () => {
        const { getByText } = render(<Button label="save"></Button>);
        fireEvent.click(getByText('Down'));
        const countVal = await waitForElement(() =>{
           return getByText("-1");
        });
        expect(countVal).toHaveTextContent("-1");
    });


    it("matches snapshot", () => {
        const tree = renderer.create(<Button label="save"></Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

   


});
