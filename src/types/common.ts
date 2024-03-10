export interface IGenericResponse<T = any> {
  map(arg0: (item: any) => string): unknown;
  status: string;
  isFlag: boolean;
  msg: string;
  data: T;
}

export interface AuthenticationType {}
