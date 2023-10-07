import Typography from '@/common/Typography';
import SigninForm from '@/components/sign-in/SignInForm';
import Link from 'next/link';

export const metadata = {
  title: 'Sign-in Page',
};

export default function SigninPage() {
  return (
    <>
      <Typography variant="h1" moreClassNames="text-center">
        Sign-in Page
      </Typography>
      <SigninForm />
      <Link href="/auth/sign-up" className="link">
        Create New Account
      </Link>
    </>
  );
}
