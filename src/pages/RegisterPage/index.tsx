import BreadCrumb from 'src/components/Breadcrumb'
import { PATH_AUTH } from 'src/routes/path'
import FormRegister from './FormRegister'
import { useMutation } from '@tanstack/react-query'
import { registerApi } from 'src/apis/auth.api'
import { useNavigate } from 'react-router-dom'

const BreadCrumbData = [{ label: 'Đăng ký', path: PATH_AUTH.register }]

function RegisterPage() {
  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: (data: object) => registerApi(data, navigate)
  })
  return (
    <div>
      <BreadCrumb data={BreadCrumbData} />
      <FormRegister onMutate={mutate} />
    </div>
  )
}
export const Component = RegisterPage
