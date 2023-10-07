import { httpQuery } from '@/libs';
import { User } from '@/types/user';

export const userProfile = () => httpQuery('/users/profile') as Promise<User>;
