import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PATH_AUTH, PATH_PUBLIC } from 'src/routes/path'
import Services from 'src/services'
import { AppDispatch } from 'src/store/store'
import { loginSuccess } from 'src/store/authentication/authSlice'

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

export const loginApi = async (data: object, navigate: NavigateFunction, dispatch: AppDispatch) => {
  try {
    const response = await Services.post('/api/auth/login', data)
    console.log(response)
    if (response.status === 'success') {
      dispatch(loginSuccess(response.dataUser))
      localStorage.setItem('accessToken', JSON.stringify(response.accessToken))
      navigate(PATH_PUBLIC.home)
      toast.success('login Successfully!')
    }
  } catch (error) {
    console.log(error)
  }
}
