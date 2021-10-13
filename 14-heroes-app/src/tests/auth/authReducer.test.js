import '@testing-library/jest-dom'
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Tests in authReducer', () => {
  
  test('should return initialState', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  });

  test('should authenticate & username display', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Fernando'
      }
    }

    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({ logged: true, name: 'Fernando' })
  });

  test('should delete name & logged: false', () => {
    const action = {
      type: types.logout,
    }

    const state = authReducer({ logged: true, name: 'Fernando' }, action)
    expect(state).toEqual({ logged: false })
  });

});
