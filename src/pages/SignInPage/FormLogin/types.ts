export interface SubmitForm {
  email: string
  password: string
}
export interface Props {
  onMutate: (data: object) => void
}
