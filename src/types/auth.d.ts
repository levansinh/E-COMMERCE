import { SuccessResponse } from './common';
export type AuthResponse = SuccessResponse<{
  access_token: string;
  expires: string;
  user: User;
}>;
