import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Tests in <AddCategory />', () => {
  
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should render successful', () => {

    expect(wrapper).toMatchSnapshot()

  });

  test('should get input from textarea', () => {
    
    const input = wrapper.find('input')
    const value = 'Hola Value'
    input.simulate('change', {target: {value}})

    expect(wrapper.find('p').text().trim()).toBe(value)

  });

  test('should not post submit info', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(setCategories).not.toHaveBeenCalled()

  });

  test('should call setCategories and empty textarea', () => {

    const value = 'Hola Value'

    // 1. simular el inputChange
    wrapper.find('input').simulate('change', {target: {value}})

    // 2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    // 3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    // 4. El valor del input debe estar
    expect(wrapper.find('input').prop('value')).toBe('')

  });

}); 