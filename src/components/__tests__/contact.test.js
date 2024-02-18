import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us form", () => {
  //it and test are one and the same thing
  render(<Contact />); //rendering in isolation(unit testing) in js-dom
  const heading = screen.getByRole("heading"); //this will be an react element/virtual dom object/jsx

  expect(heading).toBeInTheDocument();
});
it("should load button inside contact component", () => {
  render(<Contact />);
  const button = screen.getByText("submit");
  expect(button).toBeInTheDocument();
});
it("should load 2 input boxes on the contact component", () => {
  render(<Contact />);
  const inputBox = screen.getAllByRole("textbox");
  console.log(inputBox.length);
  expect(inputBox.length).toBe(2);
});
