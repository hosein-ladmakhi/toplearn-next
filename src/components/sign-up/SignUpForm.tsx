'use client';

import { useState } from 'react';

import Button from '@/common/Button';
import ImagePicker from '@/common/ImagePicker';
import InputField from '@/common/InputField';
import Textarea from '@/common/Textarea';

export default function SignUpForm() {
  const [image, setImage] = useState<File>();
  const onChangeImage = (file: File) => setImage(file);

  return (
    <form className="sm:w-4/12 xs:9/12">
      <ImagePicker file={image} onChangeFile={onChangeImage} />
      <InputField inputType="text" label="Username" name="username" />
      <InputField inputType="email" label="Email" name="email" />
      <InputField inputType="text" label="Mobile" name="phone" />
      <InputField inputType="password" label="Password" name="password" />
      <Textarea label="Bio" placeholder="Enter Your Biography" rows={4} />
      <Button options="w-full">Signup</Button>
    </form>
  );
}
