import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Header from './../index'

describe("Header Render", () => {
  it("header inserting h2", () => {
    const { getByText, getByTestId } = render(<Header text="Hello!" />);
    expect(getByTestId("h2tag")).toHaveTextContent("Hello!");
    expect(getByText("Hello!")).toHaveClass("fancy-h2");
  })
});