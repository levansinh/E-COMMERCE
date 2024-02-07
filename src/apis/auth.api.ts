import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AUTH_URL, PUBLIC_URL } from '@/routes/urls';
import Services from '@/services';
import { AppDispatch } from '@/store/store';
import { loginSuccess } from '@/store/authentication/authSlice';

export const registerApi = async (data: object, navigate: NavigateFunction) => {
  try {
    const response = await Services.post('/api/auth/register', data);
    if (response.status === 'success') {
      navigate(AUTH_URL.login);
      toast.success('Register Successfully!');
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginApi = async (data: object, navigate: NavigateFunction, dispatch: AppDispatch) => {
  try {
    const response = await Services.post('/api/auth/login', data);
    if (response.status === 'success') {
      dispatch(loginSuccess(response.dataUser));
      localStorage.setItem('accessToken', JSON.stringify(response.accessToken));
      navigate(PUBLIC_URL.home);
      toast.success('login Successfully!');
    }
  } catch (error) {
    console.log(error);
  }
};
