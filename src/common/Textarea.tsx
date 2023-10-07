import { IReactHookFormController } from '@/types';
import { Controller } from 'react-hook-form';

interface IProps {
  label: string;
  rows: number;
  placeholder: string;
  control?: any;
  name: string;
}

export default function Textarea({
  label,
  placeholder,
  rows,
  name,
  control,
}: IProps) {
  const printTextarea = ({ field }: Partial<IReactHookFormController>) => {
    return (
      <>
        <label className="label">{label}</label>
        <textarea
          className="textarea textarea-ghost input-bordered w-full"
          placeholder={placeholder}
          rows={rows}
          {...(field || {})}
        />
      </>
    );
  };
  return (
    <div className="form-control">
      {control ? (
        <Controller control={control} name={name} render={printTextarea} />
      ) : (
        printTextarea({})
      )}
    </div>
  );
}
