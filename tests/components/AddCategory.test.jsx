import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en el componente <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Dragon Ball" } });

    expect(input.value).toBe("Dragon Ball");
  });
});
