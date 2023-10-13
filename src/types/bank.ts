import { CoreEntity } from ".";

export interface Bank extends CoreEntity {
  name: string;
  slug: string;
  isActive: boolean;
}

export type Banks = Bank[];

export type CreateOrUpdateBankPayload = Omit<
  Bank,
  "id" | "createdAt" | "deletedAt" | "updatedAt"
>;
