import BanksList from '@/components/banks/BanksList';
import CreateBankForm from '@/components/banks/CreateBankForm';

export default function BanksPage() {
  return (
    <div>
      <CreateBankForm />
      <BanksList />
    </div>
  );
}
