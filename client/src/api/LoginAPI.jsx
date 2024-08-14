import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

export const loginUser = async (password) => {
  try {
    console.log('Attempting to log in with password:', password);
    const response = await axios.post('/api/auth/login', { password }, { withCredentials: true });
    return { success: true, loginCount: response.data.loginCount };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: error.response?.data?.message || 'An error occurred' };
  }
};