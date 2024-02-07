import { Label, TextInput, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { PATH_AUTH } from '@/routes/path';
import { useForm } from 'react-hook-form';

import { SubmitForm, Props } from './types';

export default function FormRegister({ onMutate }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SubmitForm>();

  const { email, password, lastName, firstName, mobile } = errors;

  const onSubmit = (data: object) => {
    onMutate(data);
  };

  return (
    <div className='w-[500px] mx-auto text-center my-8'>
      <h1 className='text-3xl'>ĐĂNG KÝ TÀI KHOẢN</h1>
      <p className='text-sm my-3 flex items-center gap-x-1 justify-center'>
        Bạn đã có tài khoản ?
        <Link to={PATH_AUTH.login} className='text-primary underline'>
          Đăng nhập tại đây.
        </Link>
      </p>

      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-xl uppercase mt-10 mb-5'>Thông tin khách hàng</h2>
        <div className='flex items-center justify-between'>
          <div>
            <div className='mb-2 flex justify-start gap-x-1 items-center'>
              <Label htmlFor='fisrtName' value='Fisrt Name' />
              <span className='text-red-400'>*</span>
            </div>
            <TextInput
              id='fisrtname'
              type='text'
              placeholder='Sinh'
              {...register('firstName', { required: true })}
              required
            />
            {firstName && <span>This field is required</span>}
          </div>
          <div>
            <div className='mb-2 flex justify-start gap-x-1 items-center'>
              <Label htmlFor='lastName' value='Last Name' />
              <span className='text-red-400'>*</span>
            </div>
            <TextInput
              id='lastname'
              type='text'
              placeholder='Lê Văn'
              {...register('lastName', { required: true })}
              required
            />
            {lastName && <span>This field is required</span>}
          </div>
        </div>
        <div>
          <div className='mb-2 flex justify-start gap-x-1 items-center'>
            <Label htmlFor='email1' value='Your email' />
            <span className='text-red-400'>*</span>
          </div>
          <TextInput
            id='email1'
            type='email'
            placeholder='name@gmail.com'
            {...register('email', { required: true })}
            className='outline-none'
            required
          />
          {email && <span>This field is required</span>}
        </div>
        <div>
          <div className='mb-2 flex justify-start gap-x-1 items-center'>
            <Label htmlFor='mobile' value='Mobile' />
            <span className='text-red-400'>*</span>
          </div>
          <TextInput
            id='mobile'
            type='number'
            placeholder='0325610016'
            {...register('mobile', { required: true })}
            className='outline-none'
            required
          />
          {mobile && <span>This field is required</span>}
        </div>
        <div>
          <div className='mb-2 flex justify-start gap-x-1 items-center'>
            <Label htmlFor='password' value='Your password' />
            <span className='text-red-400'>*</span>
          </div>
          <TextInput
            id='password'
            type='password'
            placeholder='*********'
            {...register('password', { required: true })}
            className='outline-none'
            required
          />
          {password && <span>This field is required</span>}
        </div>
        <Button type='submit' className='w-full bg-primary'>
          Đăng ký
        </Button>
        <div className='text-[#666666] my-5 text-sm'>Hoặc đăng nhập bằng</div>
      </form>
    </div>
  );
}
