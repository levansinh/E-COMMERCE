export interface CurrentUser {
  _id: string
  lastName: string
  firstName: string
  email: string
  mobile: number
}
export interface LoginSuccessAction {
  payload: LoginSuccessPayload
}
export interface LoginSuccessPayload {
  dataUser: CurrentUser
  accessToken: string
}
