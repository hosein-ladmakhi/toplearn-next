"use client";

import Button from "@/common/Button";
import InputField from "@/common/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ISigninFormField } from "@/types";
import { signin } from "@/services";
import { useRouter } from "next/navigation";
import { tokenStore } from "@/store";

const loginValidation = z.object({
  email: z
    .string({ required_error: "You must provide your email" })
    .email("Your email contains invalid character"),
  password: z
    .string({ required_error: "You must provide your password" })
    .min(8, "Your password must atleast contain 8 characters"),
});

export default function SigninForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginValidation),
    mode: "all",
  });
  const { setTokenStore } = tokenStore();

  const router = useRouter();

  const onSubmit = (data: ISigninFormField) => {
    signin(data)
      .then((response) => {
        if (response.refreshToken && response.token) {
          setTokenStore((state) => ({
            ...state,
            token: response.token,
            refreshToken: response.refreshToken,
          }));
          alert("login successfully");
          router.push("/");
        } else {
          alert("login failed ...");
        }
      })
      .catch(() => {
        alert("login failed ...");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      className="mx-auto sm:w-4/12 xs:9/12"
    >
      <InputField
        control={control}
        inputType="text"
        label="Email"
        name="email"
      />
      <InputField
        control={control}
        inputType="password"
        label="Password"
        name="password"
      />
      <Button options="w-full my-3">Login</Button>
    </form>
  );
}
