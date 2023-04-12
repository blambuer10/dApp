import { create } from "zustand";
import { persist } from "zustand/middleware";
type Network = "aptos" | "sui";
interface NetworkStore {
  network: Network;
  setNetwork: (data: Network) => void;
}
const useNetworkStore = create<NetworkStore>(
  persist(
    (set) => ({
      network: "aptos",
      setNetwork: (data: Network) => set(() => ({ network: data })),
    }),
    {
      name: "snotra-network",
    }
  ) as any
);
export default useNetworkStore;
