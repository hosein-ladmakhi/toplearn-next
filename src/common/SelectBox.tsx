'use client';

import { IReactHookFormController } from '@/types';
import { Controller } from 'react-hook-form';

interface IProps {
  containerClasses?: string;
  options: { text: string; value: any; disabled?: boolean }[];
  label: string;
  control?: any;
  name: string;
}

export default function SelectBox({
  containerClasses = '',
  options,
  label,
  control,
  name,
}: IProps) {
  const print = ({ field, formState }: Partial<IReactHookFormController>) => {
    const errorMessage = formState?.errors?.[field!?.name]?.message;
    const labelErrorClass = errorMessage ? 'text-red-500' : '';
    const inputErrorClass = errorMessage ? 'select-error' : '';

    return (
      <div className={`form-control ${containerClasses}`}>
        <label className={`label ${labelErrorClass}`}>{label}</label>
        <select
          {...field}
          className={`select select-bordered ${inputErrorClass}`}
        >
          {options.map((option) => (
            <option
              key={option.text}
              disabled={option.disabled}
              value={+option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
        {errorMessage && (
          <label className={`label label-text-alt ${labelErrorClass}`}>
            {errorMessage as any}
          </label>
        )}
      </div>
    );
  };
  return control ? (
    <Controller name={name} control={control} render={print} />
  ) : (
    print({})
  );
}
