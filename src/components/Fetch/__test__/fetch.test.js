import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import axiosMock from "axios";
import Fetch from './../index';

describe("Testing a mock Axios request", () => {
    it("fetch and display data", async ()=>{
        axiosMock.get.mockResolvedValueOnce({data:{ greetings:'Hello there'}});

        const url = '/greetings';
        const {getByTestId} = render(<Fetch url = {url} />);
        expect(getByTestId('loading')).toHaveTextContent('Loading data...');

        const resolvedSpan = await waitForElement(()=>{ 
           return getByTestId("resolved")
        });
        expect(resolvedSpan).toHaveTextContent('Hello there');
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
         //  expect(axiosMock.get).toHaveBeenCalledWith(url);
        //https://www.youtube.com/watch?v=Ngj2f1n9pUw
    })
});