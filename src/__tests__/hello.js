import React from "react";
import { render } from "react-testing-library";
import Hello from "../hello";

describe("<Hello />", () => {
  it("shows the text 'hello react' inside the component", () => {
    const { getByText } = render(<Hello />);

    expect(getByText(/hello react/i)).toBeTruthy();
  });
});
