'use client';

import { IButtonGroup } from '@/types';
import Button from './Button';

interface IProps {
  actions: IButtonGroup[];
  loading?: boolean;
}

export default function ButtonGroup({ actions, loading }: IProps) {
  const onClickEvent = (callback: Function, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    callback(e);
  };
  return (
    <div className="flex">
      {actions.map(({ action, text, type, className }) =>
        type === 'client' ? (
          <Button
            key={text}
            isLoading={loading}
            options={className || ''}
            onClick={onClickEvent.bind(null, action)}
          >
            {text}
          </Button>
        ) : (
          <form key={text} action={action}>
            <Button
              onClick={(e) => e.stopPropagation()}
              isLoading={loading}
              options={className || ''}
            >
              {text}
            </Button>
          </form>
        ),
      )}
    </div>
  );
}
