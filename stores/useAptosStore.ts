import { create } from "zustand";

type UserWallet = {
  provider: string;
  address: string;
  publicKey: string;
};
interface Store {
  userWallet: UserWallet | null;
  setUserWallet: (data: UserWallet) => void;
  disconnect: () => void;
}
const useAptosStore = create<Store>((set) => ({
  userWallet: null,
  setUserWallet: (data: UserWallet) => set(() => ({ userWallet: data })),
  disconnect: () => set(() => ({ userWallet: null })),
}));

export default useAptosStore;
