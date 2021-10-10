import {renderHook} from '@testing-library/react-hooks'
import useFetch from '../../hooks/useFetch';

describe('Tests in useFetch', () => {

  test('should return default info', () => {
    const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    const {loading, data, error} = result.current

    expect(loading).toBe(true)
    expect(data).toBe(null)
    expect(error).toBe(null)
  });

  test('should have info, loading: false, error: false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    await waitForNextUpdate()
    const {loading, data, error} = result.current

    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  });

  test('should handle error', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/ap/users?page=2'))
    await waitForNextUpdate()
    const {loading, data, error} = result.current

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('could not fetch')
  });

});