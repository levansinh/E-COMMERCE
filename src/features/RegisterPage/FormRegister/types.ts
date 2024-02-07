export interface SubmitForm {
  firstName: string;
  lastName: string;
  mobile: number;
  email: string;
  password: string;
}

export interface Props {
  onMutate: (data: object) => void;
}
