import {
  ControllerRenderProps,
  FieldValues,
  ControllerFieldState,
  UseFormStateReturn,
} from 'react-hook-form';

export interface IReactHookFormController {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}

export interface IButtonGroup {
  className?: string;
  action: any;
  text: string;
  type: 'server' | 'client';
}
