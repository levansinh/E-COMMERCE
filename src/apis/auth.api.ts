import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PATH_AUTH } from 'src/routes/path'
import Services from 'src/services'
export const registerApi = async (data: object, navigate: NavigateFunction) => {
  try {
    const response = await Services.post('/api/auth/register', data)
    if (response.status === 'success') {
      navigate(PATH_AUTH.login)
      toast.success('Register Successfully!')
    }
  } catch (error) {
    console.log(error)
  }
}
