export interface ISignupFormField {
  username: string;
  email: string;
  password: string;
  mobile: string;
  bio: string;
}

export interface ISigninFormField {
  username: string;
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
