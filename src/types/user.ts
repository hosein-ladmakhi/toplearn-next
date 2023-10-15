import { CoreEntity, IFile } from './index';

export enum UserStatus {
  BLOCK = 'BLOCK',
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
}

export interface User extends CoreEntity {
  username: string;
  email: string;
  password: string;
  image?: IFile;
  bio?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  status: UserStatus;
  credit: number;
  // roles: Role;
  // orders?: Order[];
}

export type Users = User[];
