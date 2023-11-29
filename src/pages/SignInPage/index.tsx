import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginApi } from 'src/apis/auth.api'
import BreadCrumb from 'src/components/Breadcrumb'
import { PATH_AUTH } from 'src/routes/path'
import FormLogin from './FormLogin'

const BreadCrumbData = [{ lable: 'Đăng nhập', path: PATH_AUTH.login }]

function SignInPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { mutate } = useMutation({
    mutationFn: (data: object) => loginApi(data, navigate, dispatch)
  })
  return (
    <div>
      <BreadCrumb data={BreadCrumbData} />
      <FormLogin onMutate={mutate} />
    </div>
  )
}
export const Component = SignInPage
