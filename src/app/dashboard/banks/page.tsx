import BankHeader from '@/components/banks/BankHeader';
import BanksList from '@/components/banks/BanksList';
import CreateBankFormModal from '@/components/banks/CreateBankForm';
import { getBanks } from '@/services';

export default async function BanksPage() {
  const banks = await getBanks();

  return (
    <>
      <CreateBankFormModal />
      <BankHeader banksCount={banks.length} />
      <BanksList banks={banks} />
    </>
  );
}
