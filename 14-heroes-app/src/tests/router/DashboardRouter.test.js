import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import DashboardRouter from '../../routers/DashboardRouter'

describe('Tests in <DashBoardRouter />', () => {

  const contextValue = {
    dispath: jest.fn(),
    user: {
      logged: true,
      name: 'Loki'
    }
  }

  test('should render correclty', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()

    expect( wrapper.find('.text-info').text().trim() ).toBe('Loki')

  });
  
});