import { httpMutation, httpQuery } from '@/libs';
import { User, Users } from '@/types/user';

export const userProfile = () => httpQuery('/users/profile') as Promise<User>;

export const getUsers = () => httpQuery('/users', ['users']) as Promise<Users>;

export const getUserById = (id: number) =>
  httpQuery(`/users/${id}`, [`users-${id}`]) as Promise<User>;

export const deleteUserById = (id: number) =>
  httpMutation(`/users/${id}`, { method: 'DELETE' });
