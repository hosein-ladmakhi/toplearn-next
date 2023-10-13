import { create } from "zustand";

interface TokenStore {
  token?: string;
  refreshToken?: string;

  setTokenStore: (
    partial:
      | TokenStore
      | Partial<TokenStore>
      | ((state: TokenStore) => TokenStore | Partial<TokenStore>),
    replace?: boolean | undefined
  ) => void;
}

export const tokenStore = create<TokenStore>((set) => ({
  token: "",
  refreshToken: "",
  setTokenStore: set,
}));
