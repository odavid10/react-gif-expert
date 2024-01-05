import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el component <GifGrid />", () => {
  const category = "Dragon Ball";

  test("debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargas las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABD",
        title: "Dragon Ball",
        url: "https://localhost/dragonDalle.jps",
      },
      {
        id: "ABD2",
        title: "Dragon Ball 2",
        url: "https://localhost/dragonDalle-2.jps",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
