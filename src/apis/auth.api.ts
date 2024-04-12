import { useMutation } from '@tanstack/react-query';

import http from '@/config/axios.config';
import { IUser } from '@/types/user';

// login

const loginMutation = async (data: Pick<IUser, 'email' | 'password'>) => {
  const res = await http.post('user/login', data);
  return res.data;
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginMutation
  });
};

// // register
const registerMutation = async (data: Pick<IUser, 'email' | 'password' | 'mobile'>) => {
  const res = await http.post('api/auth/register', data);
  return res.data;
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: registerMutation
  });
};
