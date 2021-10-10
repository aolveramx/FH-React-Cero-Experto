import '@testing-library/jest-dom'
import { getGifs } from "../../helpers/getGifs"

describe('Tests with getGifs', () => {
  
  test('should return 10 items', async () => {

    const gifs = await getGifs('Dragon Ball')

    expect(gifs.length).toBe(10)

  });

  test('should return 0 items', async () => {

    const gifs = await getGifs('')

    expect(gifs.length).toBe(0)

  });

});