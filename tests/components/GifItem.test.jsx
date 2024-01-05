import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Pruebas en el component <GifItem />", () => {
  const title = "Nombre de la imagen";
  const url = "https://one-punch.com/saitama.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe mostrar el titlulo en el component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
