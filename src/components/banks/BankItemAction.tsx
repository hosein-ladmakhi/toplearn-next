'use client';

import { deleteBankAction } from '@/app/dashboard/banks/action';
import ButtonGroup from '@/common/ButtonGroup';
import { Bank, IButtonGroup } from '@/types';
import { useEffect, useMemo, useState, useTransition } from 'react';

interface IProps {
  selectedBank: Bank;
}

export default function BankItemAction({ selectedBank }: IProps) {
  const [bank, setBank] = useState<Bank | undefined>(selectedBank);
  useEffect(() => {
    return () => {
      setBank(undefined);
      console.log(bank);
    };
  }, [selectedBank]);

  const [deletePending, deleteTransition] = useTransition();
  const onDeleteBank = () =>
    deleteTransition(() => {
      deleteBankAction(bank!);
    });

  const actions: IButtonGroup[] = useMemo(() => {
    return [
      {
        action: onDeleteBank,
        type: 'server',
        text: 'Delete',
        className: 'mt-5 mr-2',
      },
      {
        action: () => {},
        type: 'client',
        text: 'update',
        className: 'mt-5',
      },
    ];
  }, []);

  return (
    <ButtonGroup loading={deletePending} type="server" actions={actions} />
  );
}
