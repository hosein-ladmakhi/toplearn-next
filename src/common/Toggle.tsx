import { IReactHookFormController } from "@/types/common";
import { Controller } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  control?: any;
  classes?: string;
}

export default function Toggle({ label, name, control, classes = "" }: IProps) {
  const print = ({ field }: Partial<IReactHookFormController>) => {
    return (
      <div className={`${classes} form-control cursor-pointer`}>
        <label className="label">
          <span className="label-text">{label}</span>
          <input
            {...field}
            type="checkbox"
            checked={field?.value}
            className="toggle toggle-info"
          />
        </label>
      </div>
    );
  };

  if (!control) return print({});
  return <Controller name={name} control={control} render={print} />;
}
