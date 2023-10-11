import BankHeader from '@/components/banks/BankHeader';
import BanksList from '@/components/banks/BanksList';
import CreateBankFormModal from '@/components/banks/CreateBankForm';
import { Banks } from '@/types';

const banks: Banks = [
  {
    id: 1,
    name: 'PurpleBank',
    slug: 'Purple Bank',
    isActive: true,
  },
  {
    id: 2,
    name: 'RedBank',
    slug: 'Red Bank',
    isActive: true,
  },
  {
    id: 3,
    name: 'Green Bank',
    slug: 'GreenBank',
    isActive: true,
  },
  {
    id: 4,
    name: 'Blue Bank',
    slug: 'BlueBank',
    isActive: true,
  },
  {
    id: 5,
    name: 'Yellow Bank',
    slug: 'YellowBank',
    isActive: true,
  },
];

export default function BanksPage() {
  return (
    <>
      <CreateBankFormModal />
      <BankHeader banksCount={banks.length} />
      <BanksList banks={banks} />
    </>
  );
}
