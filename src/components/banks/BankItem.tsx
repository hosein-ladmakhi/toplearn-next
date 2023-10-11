import Typography from '@/common/Typography';
import { Bank } from '@/types';
import Link from 'next/link';
import BankItemAction from './BankItemAction';

interface IProps {
  bank: Bank;
}

export default function BankItem({ bank }: IProps) {
  return (
    <Link
      className="border-2 border-gray-500 p-5 rounded block mb-5"
      href={`/banks/${bank.id}`}
      as="/banks/item"
    >
      <Typography variant="h4">{bank.name}</Typography>
      <Typography variant="caption">Slug: {bank.slug}</Typography>
      <Typography variant="caption">
        Is Active: {bank.isActive ? 'Enabled' : 'Disabled'}
      </Typography>
      <BankItemAction selectedBank={bank} />
    </Link>
  );
}
