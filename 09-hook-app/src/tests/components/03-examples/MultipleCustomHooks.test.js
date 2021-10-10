import {shallow} from 'enzyme'
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Tests in <MultipleCustomHooks />', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
    })
  })

  test('should render component', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  });

  test('should render info', () => {

    useFetch.mockReturnValue({
      data: [{
        author: 'Walter',
        quote: 'There was no other option jesse'
      }],
      loading: false,
      error: null,
    })

    const wrapper = shallow(<MultipleCustomHooks />)

    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-0').text().trim()).toBe('There was no other option jesse')
    expect(wrapper.find('footer').text().trim()).toBe('Walter') 
  });
  
});