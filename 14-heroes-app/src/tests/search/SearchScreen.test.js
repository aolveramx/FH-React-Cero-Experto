import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router';
import SearchScreen from '../../components/search/SearchScreen';

describe('Tests in <SearchScreen />', () => {
  
  test('should render correctly with defaultValues', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero')
    
  });

  test('should render Batman and input with queryString', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect( wrapper.find('input').prop('value') ).toBe('batman')
    expect(wrapper).toMatchSnapshot()

  });

  test('if hero doesnt exist, should throw an error', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect( wrapper.find('.alert-danger').text().trim() ).toBe(`There is no a hero with batman123`)
    expect(wrapper).toMatchSnapshot()

  });

  test('should call history.push()', () => {

    const history = {
      push: jest.fn()
    }
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route 
          path="/search" 
          component={ () => <SearchScreen history={history} /> }
        />
      </MemoryRouter>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    })

    expect( history.push ).toHaveBeenCalledWith(`?q=batman`)

  });

});