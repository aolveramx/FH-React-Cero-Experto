import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'

describe('Tests in hook useFetchGifs.js', () => {

  test('should return initial state', async () => {

    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Dragon Ball'))
    const {data, loading} = result.current
    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
    
  });

  test('should return images array and loading = false', async () => {
    
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Dragon Ball'))
    await waitForNextUpdate()
    const {data, loading} = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)

  });
  
});