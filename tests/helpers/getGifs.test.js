import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  const category = "Dragon Ball";

  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs(category);

    expect(gifs.length).toBeGreaterThanOrEqual(10);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
