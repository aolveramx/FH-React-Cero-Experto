import {renderHook, act} from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm';

describe('tests in useForm', () => {
  
  const initialForm = {
    name: 'Ari',
    email: 'a@gmail.com'
  }

  test('should return a form by default', () => {
    const {result} = renderHook(() => useForm(initialForm))
    const [values, handleInputChange, reset] = result.current

    expect(values).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  });

  test('should change form value', () => {
    const {result} = renderHook(() => useForm(initialForm))
    const [ , handleInputChange] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      })
    })

    const [values] = result.current
    expect(values).toEqual({...initialForm, name: 'Melissa'})
  });

  test('should reset form', () => {
    const {result} = renderHook(() => useForm(initialForm))
    const [ , handleInputChange, reset] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      })

      reset()

    })

    const [values] = result.current
    expect(values).toEqual(initialForm)
  });



});