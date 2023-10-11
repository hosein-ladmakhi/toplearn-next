import { Banks } from '@/types';
import BankItem from './BankItem';

interface IProps {
  banks: Banks;
}

export default function BanksList({ banks }: IProps) {
  return (
    <>
      {banks.map((bank) => (
        <BankItem key={bank.id} bank={bank} />
      ))}
    </>
  );
}
