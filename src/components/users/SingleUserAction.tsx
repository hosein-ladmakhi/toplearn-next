'use client';

import ButtonGroup from '@/common/ButtonGroup';
import { IButtonGroup } from '@/types';
import { User } from '@/types/user';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

interface IProps {
  user: User;
}

export default function SingleUserAction({ user }: IProps) {
  const { push } = useRouter();
  const onEditUser = () => push(`/dashboard/users/edit/${user.id}`);

  const actions = useMemo(
    () =>
      [
        {
          action: onEditUser,
          text: 'Edit User',
          type: 'client',
          className: 'mt-5',
        },
        {
          action: () => {},
          text: 'Delete User',
          type: 'client',
          className: 'mt-5 ml-4',
        },
      ] as IButtonGroup[],
    [user.id],
  );
  return <ButtonGroup actions={actions} />;
}
