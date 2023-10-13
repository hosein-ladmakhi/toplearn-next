"use client";

import { useState } from "react";

import Button from "@/common/Button";
import ImagePicker from "@/common/ImagePicker";
import InputField from "@/common/InputField";
import Textarea from "@/common/Textarea";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileType, ISignupFormField, ISignupPayload } from "@/types";
import { signup, uploadFile } from "@/services";
import { useRouter } from "next/navigation";
import { tokenStore } from "@/store";

const formValidation = zod.object({
  username: zod
    .string({ required_error: "You must provide your username" })
    .min(3, "Your username must atleast contain 3 character"),
  email: zod
    .string({ required_error: "You must provide your email" })
    .email({ message: "Your email contains invalid format" }),
  password: zod
    .string({ required_error: "You must provide your password" })
    .min(8, "Your password must atleast contain 8 character"),
  mobile: zod
    .string({ required_error: "You must provide your mobile" })
    .regex(
      new RegExp("^(\\+98|0)?9\\d{9}$"),
      "Your mobile contains invalid format"
    ),
  bio: zod.string().optional(),
});

export default function SignUpForm({}) {
  const [image, setImage] = useState<File>();
  const onChangeImage = (file: File) => setImage(file);

  const router = useRouter();
  const { setTokenStore } = tokenStore();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formValidation),
    mode: "all",
  });

  const onUploadImage = () => {
    const uploadedFormData = new FormData();
    uploadedFormData.append("type", FileType.IMAGE);
    uploadedFormData.append("file", image!);
    return uploadFile(uploadedFormData);
  };

  const onSubmitForm = (data: ISignupFormField) => {
    if (!image) {
      alert("Please select your picture");
      return;
    }
    onUploadImage()
      .then((file) => {
        const signupPayload: ISignupPayload = {
          image: file.id,
          phone: data.mobile,
          username: data.username,
          bio: data.bio,
          email: data.email,
          password: data.password,
        };

        signup(signupPayload)
          .then((response) => {
            if (response.token && response.refreshToken) {
              setTokenStore((state) => ({
                ...state,
                token: response.token,
                refreshToken: response.refreshToken,
              }));
              alert("signup successfully");
              router.push("/");
            } else {
              alert("signup failed ...");
            }
          })
          .catch(() => {
            console.log("signup failed ...");
          });
      })
      .catch(() => {
        alert("uploading image failed ...");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm as any)}
      className="sm:w-4/12 xs:9/12 mx-auto"
    >
      <ImagePicker file={image} onChangeFile={onChangeImage} />

      <InputField
        control={control}
        inputType="text"
        label="Username"
        name="username"
      />

      <InputField
        control={control}
        inputType="email"
        label="Email"
        name="email"
      />

      <InputField
        control={control}
        inputType="text"
        label="Mobile"
        name="mobile"
      />

      <InputField
        control={control}
        inputType="password"
        label="Password"
        name="password"
      />

      <Textarea
        control={control}
        name="bio"
        label="Bio"
        placeholder="Enter Your Biography"
        rows={4}
      />

      <Button options="w-full my-4">Signup</Button>
    </form>
  );
}
