import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import PrivateRoute from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('Tests in <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('should display component if isAuthenticated: true & save in localStorage', () => {

    const wrapper = mount(
      <MemoryRouter>        
        <PrivateRoute 
          isAuthenticated={ true }
          component={ () => <span>Listo!</span> }
          {...props}
        />
      </MemoryRouter>
    )

      expect( wrapper.find('span').exists() ).toBe(true)
      expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')

  })

  test('component blocked if not isAutenticated', () => {

    const wrapper = mount(
      <MemoryRouter>        
        <PrivateRoute 
          isAuthenticated={ false }
          component={ () => <span>Listo!</span> }
          {...props}
        />
      </MemoryRouter>
    )

      expect( wrapper.find('span').exists() ).toBe(false)
      expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')

  });

})
