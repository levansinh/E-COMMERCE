import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginApi } from '@/apis/auth.api';
import BreadCrumb from '@/components/Breadcrumb';
import { AUTH_URL } from '@/routes/urls';
import FormLogin from './FormLogin';

const BreadCrumbData = [{ label: 'Đăng nhập', path: AUTH_URL.login }];

function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation({
    mutationFn: (data: object) => loginApi(data, navigate, dispatch)
  });
  return (
    <div>
      <BreadCrumb data={BreadCrumbData} />
      <FormLogin onMutate={mutate} />
    </div>
  );
}
export const Component = SignInPage;
