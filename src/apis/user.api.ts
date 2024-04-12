import { useQuery } from '@tanstack/react-query';

import http from '@/config/axios.config';
import { SuccessResponse } from '@/types/common';
import { IUser } from '@/types/user';

export type UserResponse = SuccessResponse<{
  user: IUser;
}>;

const fetchUserApi = async () => {
  const res = await http.get<UserResponse>('user/current');
  return res;
};

export const useFetchUser = () => {
  const { data: authUser, ...queryProps } = useQuery({
    queryKey: ['fetch-user'],
    queryFn: fetchUserApi,
    select: ({ data }) => data,
    staleTime: Infinity
  });
  return { authUser, ...queryProps };
};
