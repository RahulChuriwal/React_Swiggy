import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test('should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test('should load button inside Contact component', () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test('should load input name inside Contact component', () => {
    render(<Contact />);

    const inputholder = screen.getByPlaceholderText("Name");

    expect(inputholder).toBeInTheDocument();
})

test('should load 2 input boxes inside Contact component', () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})

