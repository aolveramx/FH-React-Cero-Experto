import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Tests in <LoginScreen />', () => {

  const history = {
    replace: jest.fn(),
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <LoginScreen
        history={ history }
      />
    </AuthContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  test('should render correctly', () => {

    expect(wrapper).toMatchSnapshot()
    
  });

  test('should call login & history', () => {
    
    const handleClick = wrapper.find('button').prop('onClick')

    handleClick()

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Ari',
      }
    })

    expect( history.replace ).toHaveBeenCalledWith('/')

    localStorage.setItem('lasPath', '/dc')
    handleClick()
    expect( history.replace ).toHaveBeenCalledWith('/')

  });

  
})