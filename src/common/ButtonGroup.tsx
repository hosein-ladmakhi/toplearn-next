'use client';

import { IButtonGroup } from '@/types';
import Button from './Button';

interface IProps {
  actions: IButtonGroup[];
  type: 'server' | 'client';
  loading?: boolean;
}

export default function ButtonGroup({ actions, loading }: IProps) {
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex">
      {actions.map(({ action, text, type, className }) =>
        type === 'client' ? (
          <Button
            isLoading={loading}
            options={className || ''}
            onClick={action}
          >
            {text}
          </Button>
        ) : (
          <form action={action}>
            <Button isLoading={loading} options={className || ''}>
              {text}
            </Button>
          </form>
        ),
      )}
    </div>
  );
}
