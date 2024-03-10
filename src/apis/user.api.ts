import { useQuery } from '@tanstack/react-query';

import http from '@/config/axios.config';
import { IGenericResponse } from '@/types/common';
import { IUser } from '@/types/user';

interface IFetchUserResponse extends IGenericResponse {
  data: IUser;
}

const fetchUserApi = async () => {
  const res = await http.get<IFetchUserResponse>('api/user/current');
  return res.data;
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
