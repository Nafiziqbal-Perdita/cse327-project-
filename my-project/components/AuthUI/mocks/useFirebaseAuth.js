export const useFirebaseAuth = () => ({
    user: null,
    forgetPassword: jest.fn(),
    isLoading: false,
    signUp: jest.fn(),
    signIn: jest.fn(),
    error: null,
    setError: jest.fn(),
  });