export interface Bank {
  id: number;
  name: string;
  slug: string;
  isActive: boolean;
}

export type Banks = Bank[];

export type CreateBankPayload = Omit<Bank, 'id'>;
