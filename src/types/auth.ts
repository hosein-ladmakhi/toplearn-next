export interface ISignupFormField {
  username: string;
  email: string;
  password: string;
  mobile: string;
  bio: string;
}

export interface ISigninFormField {
  email: string;
  password: string;
}

export interface ISignupPayload {
  username: string;
  password: string;
  email: string;
  bio?: string;
  image: number;
  phone: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  refreshToken: string;
}
