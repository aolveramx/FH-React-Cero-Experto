import {mount} from 'enzyme'

import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <LoginScreen />', () => {
  
  const setUser = jest.fn()

  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />)
    </UserContext.Provider>
  )

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('should exdcute setUser with argument', () => {
    wrapper.find('button').prop('onClick')()
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Ari',
    })
  });

});