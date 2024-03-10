import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import InputValidate from '@/components/Input/InputValidate';
import { AUTH_URL } from '@/constants/routerUrl';
import { useLoginMutation } from '@/apis/auth.api';

export interface SubmitForm {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { mutate } = useLoginMutation();
  const methods = useForm<SubmitForm>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const { handleSubmit } = methods;
  const submitHandler = handleSubmit((values) => {
    console.log(values);
    mutate(values);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler}>
        <InputValidate name='email' id='email' placeholder='name@gmail.com' label='Your email' required />
        <InputValidate name='password' id='password' placeholder='*********' label='Your password' required />
        <div className='flex items-center gap-1 my-2 text-xs text-text'>
          <span>Quên mật khẩu?</span>
          <span>
            Nhấn tại
            <Link to={AUTH_URL.forgot_password} className='text-primary underline font-bold ml-1'>
              đây
            </Link>
          </span>
        </div>
        <Button type='submit' className='w-full bg-primary text-white'>
          Đăng nhập
        </Button>
        <div className='text-[#666666] my-5 text-sm text-center'>Hoặc đăng nhập bằng</div>
      </form>
    </FormProvider>
  );
};
export default FormLogin;
