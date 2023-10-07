'use client';

import Button from '@/common/Button';
import InputField from '@/common/InputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { ISigninFormField } from '@/types';

const loginValidation = z.object({
  username: z
    .string({ required_error: 'You must provide your username' })
    .min(3, 'Your username must atleast contain 3 characters'),
  password: z
    .string({ required_error: 'You must provide your password' })
    .min(8, 'Your password must atleast contain 8 characters'),
});

export default function SigninForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginValidation),
    mode: 'all',
  });

  const onSubmit = (data: ISigninFormField) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      className="mx-auto sm:w-4/12 xs:9/12"
    >
      <InputField
        control={control}
        inputType="text"
        label="Username"
        name="username"
      />
      <InputField
        control={control}
        inputType="password"
        label="Password"
        name="password"
      />
      <Button options="w-full">Login</Button>
    </form>
  );
}
