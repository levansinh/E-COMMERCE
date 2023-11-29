import { createSlice } from '@reduxjs/toolkit'
import { LoginSuccessAction } from 'src/common/auth'
const initialState = {
  currentUser: {} || null,
  isLoggedIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state: typeof initialState, action: LoginSuccessAction) => {
      state.currentUser = action.payload
      state.isLoggedIn = true
    }
  }
})

export const { loginSuccess } = authSlice.actions

export default authSlice.reducer
