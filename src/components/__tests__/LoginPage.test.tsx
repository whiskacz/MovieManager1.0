import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from '../LoginPage';

describe('LoginPage Component', () => {
  test('Renders without errors', () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage />);

    const logInTitle = getByText('Log In');
    const signUpTitle = getByText('Sign Up');

    expect(logInTitle).toBeInTheDocument();
    expect(signUpTitle).toBeInTheDocument();
  });

  test('Updates logInData and signUpData on input change', () => {
    const { getByPlaceholderText } = render(<LoginPage />);

    const logInUserInput = getByPlaceholderText('User');
    const logInPasswordInput = getByPlaceholderText('Password');

    const signUpUserInput = getByPlaceholderText('Full Name');
    const signUpPasswordInput = getByPlaceholderText('Password');
    const signUpEmailInput = getByPlaceholderText('Email');

    fireEvent.change(logInUserInput, { target: { value: 'TestUser' } });
    fireEvent.change(logInPasswordInput, { target: { value: 'TestPassword123!' } });

    fireEvent.change(signUpUserInput, { target: { value: 'NewUser' } });
    fireEvent.change(signUpPasswordInput, { target: { value: 'NewPassword123!' } });
    fireEvent.change(signUpEmailInput, { target: { value: 'newuser@example.com' } });

    expect(logInUserInput).toHaveValue('TestUser');
    expect(logInPasswordInput).toHaveValue('TestPassword123!');

    expect(signUpUserInput).toHaveValue('NewUser');
    expect(signUpPasswordInput).toHaveValue('NewPassword123!');
    expect(signUpEmailInput).toHaveValue('newuser@example.com');
  });
});