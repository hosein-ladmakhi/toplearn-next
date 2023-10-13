import BankHeader from "@/components/banks/BankHeader";
import BanksList from "@/components/banks/BanksList";
import CreateOrEditBankFormModal from "@/components/banks/CreateOrEditBankForm";
import { getBanks } from "@/services";

export default async function BanksPage() {
  const banks = await getBanks();

  return (
    <>
      <CreateOrEditBankFormModal />
      <BankHeader banksCount={banks.length} />
      <BanksList banks={banks} />
    </>
  );
}
