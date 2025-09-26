/**
 * testing scenario
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import LoginInput from './LoginInput.jsx';
import { userEvent } from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(()=> {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Enter Email');

    // Action
    await userEvent.type(emailInput, 'john@example.com');

    // Assert
    expect(emailInput).toHaveValue('john@example.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Enter Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async ()=> {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);

    const emailInput = await screen.getByPlaceholderText('Enter Email');
    await userEvent.type(emailInput, 'john@mail.com');

    const passwordInput = await screen.getByPlaceholderText('Enter Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'john@mail.com',
      password: 'passwordtest'
    });
  });
});
