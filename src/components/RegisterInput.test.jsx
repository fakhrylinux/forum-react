import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput.jsx';

/**
 * testing scenario
 *
 * - RegisterInputComponent
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when button is clicked
 */

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(()=> {
    cleanup();
  });

  it('should handle name typing correctly', async ()=> {
    // Arrange
    render(<RegisterInput register={()=> {}}/>);
    const nameInput = await screen.getByPlaceholderText('Enter Name');

    // Action
    await userEvent.type(nameInput, 'John Doe');

    // Assert
    expect(nameInput).toHaveValue('John Doe');
  });

  it('should handle email typing correctly', async ()=> {
    // Arrange
    render(<RegisterInput register={()=> {}}/>);
    const emailInput = await screen.getByPlaceholderText('Enter Email');

    // Action
    await userEvent.type(emailInput, 'john@mail.com');

    // Assert
    expect(emailInput).toHaveValue('john@mail.com');
  });

  it('should handle password typing correctly', async ()=> {
    // Arrange
    render(<RegisterInput register={()=> {}}/>);
    const passwordInput = await screen.getByPlaceholderText('Enter Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when button is clicked', async ()=> {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister}/>);

    const nameInput = await screen.getByPlaceholderText('Enter Name');
    await userEvent.type(nameInput, 'John Doe');

    const emailInput = await screen.getByPlaceholderText('Enter Email');
    await userEvent.type(emailInput, 'john@mail.com');

    const passwordInput = await screen.getByPlaceholderText('Enter Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name:'John Doe',
      email: 'john@mail.com',
      password: 'passwordtest'
    });
  });
});
