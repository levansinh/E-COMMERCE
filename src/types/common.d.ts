export interface SuccessResponse<T = any> {
  message: string;
  isFlag: boolean;
  data: T;
}
export interface ErrorResponse<T = any> {
  message: string;
  isFlag: boolean;
  data?: T;
}

export interface AuthenticationType {}
