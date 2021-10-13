import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter'

describe('Tests in <AppRouter />', () => {

  const contextValue = {
    dispath: jest.fn(),
    user: {
      logged: false,
    }
  }

  test('should render login if isAuthenticated: false', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()

  });

  test('should render <MarvelScreen /> if isAuthenticated: true', () => {

    const contextValue = {
      dispath: jest.fn(),
      user: {
        logged: true,
        name: 'Ari'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect( wrapper.find('.navbar').exists()).toBe(true)
    
  });
  
});