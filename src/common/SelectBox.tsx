'use client';

import { Controller } from 'react-hook-form';

interface IProps {
  containerClasses?: string;
  label: string;
  control: any;
  name: string;
  labelKey: string;
  valueKey: string;
  defaultOptionLabel: string;
  options: any[];
}

export default function SelectBox({
  containerClasses = '',
  label,
  control,
  name,
  options,
  defaultOptionLabel,
  labelKey,
  valueKey,
}: IProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
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
              <option value={undefined}>{defaultOptionLabel}</option>
              {options.map((option) => {
                return (
                  <option
                    key={option[labelKey]}
                    value={+option[valueKey]}
                    selected={option[valueKey] === field?.value}
                  >
                    {option[labelKey]}
                  </option>
                );
              })}
            </select>
            {errorMessage && (
              <label className={`label label-text-alt ${labelErrorClass}`}>
                {errorMessage as any}
              </label>
            )}
          </div>
        );
      }}
    />
  );
}
