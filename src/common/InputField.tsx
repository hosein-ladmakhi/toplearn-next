'use client';

import { IReactHookFormController } from '@/types';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';

interface IProps {
  label?: string;
  inputType: 'text' | 'password' | 'email';
  name: string;
  control?: any;
}

export default function InputField({
  inputType,
  label,
  name,
  control,
}: IProps) {
  const printInput = ({
    field,
    formState,
  }: Partial<IReactHookFormController>) => {
    const errorMessage = formState?.errors?.[field!?.name]?.message;
    const labelErrorClass = errorMessage ? 'text-red-500' : '';
    const inputErrorClass = errorMessage ? 'input-error' : '';

    return (
      <>
        {label && <label className={`label ${labelErrorClass}`}>{label}</label>}
        <input
          name={name}
          type={inputType}
          className={`input ${inputErrorClass} input-bordered w-full`}
          {...((field || {}) as any)}
        />
        {errorMessage && (
          <label className={`label label-text-alt ${labelErrorClass}`}>
            {errorMessage as any}
          </label>
        )}
      </>
    );
  };

  return (
    <div className="form-control w-full my-3">
      {control ? (
        <Controller control={control} name={name} render={printInput} />
      ) : (
        printInput({})
      )}
    </div>
  );
}
