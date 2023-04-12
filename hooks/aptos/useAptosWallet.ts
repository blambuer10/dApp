import { notifications } from "@mantine/notifications";
import useAptosStore from "@/stores/useAptosStore";
import { useCallback, useMemo } from "react";

type WalletType = "Petra" | "Martian" | "Pontem" | "Fewcha";

type WalletProvider = {
  connect: () => Promise<any>;
  account: () => Promise<any>;
  isConnected: () => Promise<boolean>;
  disconnect: () => Promise<any>;
};

const getWalletProvider = (walletType: WalletType): WalletProvider | null => {
  switch (walletType) {
    case "Petra":
      return (window as any).aptos;
    case "Martian":
      return (window as any).martian;
    case "Pontem":
      return (window as any).pontem;
    case "Fewcha":
      return (window as any).fewcha;
    default:
      return null;
  }
};

const useAptosWallet = () => {
  const setUserWallet = useAptosStore((state) => state.setUserWallet);
  const userWallet = useAptosStore((state) => state.userWallet);

  const connectWallet = useCallback(async (walletType: WalletType) => {
    if (typeof window !== "undefined") {
      const walletProvider = getWalletProvider(walletType);

      if (walletProvider) {
        try {
          const response = await walletProvider.connect();
          let userWallet;
          // const account = await walletProvider.account();
          userWallet = {
            provider: walletType,
            ...response,
          };
          if (walletType === "Fewcha") {
            userWallet = {
              provider: walletType,
              address: response?.data.address,
              publicKey: response?.data.publicKey,
            };
          }

          useAptosStore.getState().setUserWallet(userWallet);
          return response;
        } catch (error: any) {
          notifications.show({
            title: "User rejected the request.",
            message: error.message,
            color: "red",
          });
        }
      } else {
        const walletUrl =
          walletType === "Petra"
            ? "https://petra.app/"
            : walletType === "Martian"
            ? "https://www.martianwallet.xyz/"
            : walletType === "Pontem"
            ? "https://pontem.network"
            : "https://fewcha.app";

        window.open(walletUrl, "_blank");

        notifications.show({
          title: `${walletType} Wallet not found`,
          message: `Please install ${walletType} Wallet to continue`,
          color: "red",
        });
      }
    }
  }, []);
  const isConnectedAnyWallet = useCallback(async () => {
    let isConnected = false;

    for (const walletType of [
      "Petra",
      "Martian",
      "Pontem",
      "Fewcha",
    ] as WalletType[]) {
      const walletProvider = getWalletProvider(walletType);

      if (walletProvider && (await walletProvider.isConnected())) {
        const res = await walletProvider.account();
        setUserWallet({
          provider: walletType,
          ...res,
        });
        isConnected = true;
        break;
      }
    }

    return isConnected;
  }, [setUserWallet]);

  const disconnectWallet = useCallback(async () => {
    if (!userWallet) {
      return;
    }

    const walletProvider = getWalletProvider(userWallet.provider as WalletType);

    if (walletProvider) {
      await walletProvider
        .disconnect()
        .then(() => {
          notifications.show({
            title: "Wallet Disconnected",
            message: "Wallet disconnected successfully",
            color: "green",
          });
        })
        .catch((error: any) => {
          notifications.show({
            title: "Wallet Disconnection Failed",
            message: "Wallet disconnection failed",
            color: "red",
          });
        })
        .finally(() => {
          setUserWallet(null as any);
        });
    }
  }, [userWallet, setUserWallet]);

  const walletActions: any = useMemo(
    () => ({
      isConnectedAnyWallet,
      connectPontemWallet: () => connectWallet("Pontem"),
      connectMartianWallet: () => connectWallet("Martian"),
      connectPetraWallet: () => connectWallet("Petra"),
      connectFewchaWallet: () => connectWallet("Fewcha"),
      disconnectAptosWallet: disconnectWallet,
    }),
    [connectWallet, isConnectedAnyWallet, disconnectWallet]
  );

  return walletActions;
};

export default useAptosWallet;
