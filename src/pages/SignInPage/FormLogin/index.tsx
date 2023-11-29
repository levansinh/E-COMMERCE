import { Label, TextInput, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { PATH_AUTH } from 'src/routes/path'
import { SubmitForm, Props } from './types'

export default function FormLogin({ onMutate }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SubmitForm>()

  const { email, password } = errors

  const onSubmit = (data: object) => {
    onMutate(data)
  }

  return (
    <div className='w-[500px] mx-auto text-center my-8'>
      <h1 className='text-3xl'>ĐĂNG NHẬP TÀI KHOẢN</h1>
      <p className='text-sm my-3 flex items-center gap-x-1 justify-center'>
        Bạn chưa có tài khoản ?
        <Link to={PATH_AUTH.register} className='text-primary underline'>
          Đăng ký tại đây.
        </Link>
      </p>

      <form action='' onSubmit={handleSubmit(onSubmit)}>
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
        <div className='flex items-center gap-1 my-2 text-xs text-text'>
          <span>Quên mật khẩu?</span>
          <span>
            Nhấn tại{' '}
            <Link to={PATH_AUTH.forgot_password} className='text-primary underline font-bold'>
              đây
            </Link>{' '}
          </span>
        </div>
        <Button type='submit' className='w-full bg-primary'>
          Đăng nhập
        </Button>
        <div className='text-[#666666] my-5 text-sm'>Hoặc đăng nhập bằng</div>
      </form>
    </div>
  )
}
