import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router';
import HeroScreen from '../../../components/heroes/HeroScreen';


describe('Tests in <HeroScreen />', () => {

  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  test('should render Redirect if no URL arguments', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe']}>
        <HeroScreen history={ history }/>
      </MemoryRouter>
    )
    
    expect( wrapper.find('Redirect').exists() ).toBe(true)
    
  });

  test('if params exists, render a valid hero', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={ HeroScreen }/>
      </MemoryRouter>
    )

    expect( wrapper.find('.row').exists() ).toBe(true)

  })

  test('should redirect to previous page with push', () => {
      
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route 
          path="/hero/:heroId" 
          component={ () => <HeroScreen history={history} /> }
        />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')()
    expect( history.push ).toHaveBeenCalledWith('/')
    expect( history.goBack ).not.toHaveBeenCalledWith('/')

  });

  test('should redirect to previous page with goBack', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route 
          path="/hero/:heroId" 
          component={ () => <HeroScreen history={history} /> }
        />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')()
    expect( history.push ).toHaveBeenCalledTimes(0)
    expect( history.goBack ).toHaveBeenCalledWith()

  });

  test('should call redirect if not hero', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider404']}>
        <Route 
          path="/hero/:heroId" 
          component={ () => <HeroScreen history={history} /> }
        />
      </MemoryRouter>
    )

    expect( wrapper.text() ).toBe('')
    
  });

  
})