import BreadCrumb from '@/components/Breadcrumb/Breadcrumb';
import { AUTH_URL } from '@/constants/routerUrl';
import FormRegister from './FormRegister';
import { useMutation } from '@tanstack/react-query';
import { registerApi } from '@/apis/auth.api';
import { useNavigate } from 'react-router-dom';

const BreadCrumbData = [{ label: 'Đăng ký', path: AUTH_URL.register }];

function RegisterPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (data: object) => registerApi(data, navigate)
  });
  return (
    <div>
      <BreadCrumb data={BreadCrumbData} />
      <FormRegister onMutate={mutate} />
    </div>
  );
}
export const Component = RegisterPage;
