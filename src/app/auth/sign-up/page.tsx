import Typography from '@/common/Typography';
import SignUpForm from '@/components/sign-up/SignUpForm';
import Link from 'next/link';

export const metadata = {
  title: 'Signup Page',
};

export default function SignupPage() {
  return (
    <>
      <Typography variant="h1" moreClassNames="text-center">
        Sign-up Page
      </Typography>
      <SignUpForm />
      <Link href="/auth/sign-in" className="link">
        Login To Your Created Account
      </Link>
    </>
  );
}
