export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getEmailError = (email: string): string => {
  if (!email) return 'Email is required';
  if (!validateEmail(email)) return 'Please enter a valid email address';
  return '';
};

export const getPasswordError = (password: string): string => {
  const minLength = 6;
  if (!password) return 'Password is required';
  if (password.length < minLength)
    return `Password must be at least ${minLength} characters`;
  return '';
};

export const getConfirmPasswordError = (
  password: string,
  confirmPassword: string
): string => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
};
