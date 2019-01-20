import React from "react";
import { render } from "react-testing-library";
import Hello from "../hello";

test("hello react", () => {
  const { getByText } = render(<Hello />);

  expect(getByText(/hello react/i)).toBeTruthy();
});
