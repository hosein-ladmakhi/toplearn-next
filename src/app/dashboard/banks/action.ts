"use server";

import { createBank, deleteBank, updateBank } from "@/services";
import { Bank, CreateOrUpdateBankPayload } from "@/types";
import { revalidateTag } from "next/cache";

export const createBankAction = async (data: CreateOrUpdateBankPayload) => {
  const bank = await createBank(data);
  if (!bank.id) {
    return;
  }
  revalidateTag("banks");
};

export const deleteBankAction = async (selectedBank: Bank) => {
  const response = await deleteBank(selectedBank.id);
  if (response) {
    revalidateTag("banks");
    return;
  }
};

export const updateBankAction = async (
  id: number,
  data: Partial<CreateOrUpdateBankPayload>
) => {
  const response = await updateBank(id, data);
  if (!response?.affected) {
    return;
  }
  revalidateTag("banks");
  return;
};
