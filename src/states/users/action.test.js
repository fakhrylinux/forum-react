import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import api from '../../utils/api.js';
import { asyncRegisterUser } from './action.js';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

/**
 *
 * test scenario for asyncRegisterUser thunk
 *
 * - asyncRegisterUser function
 *   - should dispatch action correctly when register user success
 *   - should dispatch action and call alert correctly when register user failed
 */

const fakeRegisterUserRequest= {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password'
};

const fakeRegisterUserResponse = [
  {
    'id': 'user-123',
    'name': 'John Doe',
    'email': 'john@example.com',
    'avatar': 'https://generated-image-url.jpg'
  }
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', ()=> {
  beforeEach(()=> {
    api._register = api.register;
  });

  afterEach(()=> {
    api.register = api._register;

    delete api._register;
  });

  it('should dispatch action correctly when register user success', async () => {
    //  arrange

    // mock register implementation
    api.register = vi.fn().mockImplementation(()=> Promise.resolve(fakeRegisterUserResponse));

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncRegisterUser(fakeRegisterUserRequest)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(api.register).toHaveBeenCalledWith(fakeRegisterUserRequest);
  });

  it('should dispatch action and call alert correctly when register user failed', async () => {
    //  arrange

    // mock register implementation
    api.register = vi.fn().mockImplementation(()=> Promise.reject(fakeErrorResponse));

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncRegisterUser(fakeRegisterUserRequest)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(api.register).toHaveBeenCalledWith(fakeRegisterUserRequest);
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
