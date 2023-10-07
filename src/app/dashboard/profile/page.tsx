import { userProfile } from '@/services/user';

export const generateMetadata = async () => {
  const profile = await userProfile();
  return {
    title: profile?.username || 'Profile Page',
  };
};

export default function ProfilePage() {
  return <p>profile</p>;
}
