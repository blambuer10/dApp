import { notifications } from "@mantine/notifications";
import { useCallback, useMemo } from "react";
import { useWallet } from "@suiet/wallet-kit";

type WalletTypes =
  | "Sui Wallet"
  | "Suiet"
  | "Ethos Wallet"
  | "Martian Sui Wallet";

const useSuiWallet = () => {
  const wallet = useWallet();
  const { configuredWallets, select, disconnect } = useWallet();

  const connectWallet = useCallback(
    async (walletType: WalletTypes) => {
      const targetWallet = configuredWallets.find((w) => w.name === walletType);

      if (targetWallet) {
        if (!targetWallet.installed) {
          notifications.show({
            title: `${walletType} Wallet not found`,
            message: `Please install ${walletType} Wallet to continue`,
            color: "red",
          });
          window.open(
            targetWallet.downloadUrl.browserExtension as string,
            "_blank"
          );
        } else {
          select(targetWallet.name)
            .then(() => {
              notifications.show({
                title: `${walletType} Wallet Connected`,
                message: `Connected to ${walletType} Wallet`,
                color: "green",
              });
            })
            .catch((e) => {
              notifications.show({
                title: `${walletType} Wallet Connection Failed`,
                message: "User rejected connection",
                color: "red",
              });
            });
        }
      } else {
        notifications.show({
          title: `${walletType} Wallet not found`,
          message: `Unsupported wallet type: ${walletType}`,
          color: "red",
        });
      }
    },
    [configuredWallets, select]
  );

  const disconnectWallet = useCallback(async () => {
    if (wallet.connected) {
      disconnect()
        .then(() => {
          notifications.show({
            title: "Wallet Disconnected",
            message: "Wallet disconnected successfully",
            color: "green",
          });
        })
        .catch((e) => {
          notifications.show({
            title: "Wallet Disconnection Failed",
            message: "Wallet disconnection failed",
            color: "red",
          });
        });
    }
  }, [disconnect, wallet]);

  const walletActions:any = useMemo(
    () => ({
      connectSuiWallet: () => connectWallet("Sui Wallet"),
      connectSuietWallet: () => connectWallet("Suiet"),
      connectEthosWallet: () => connectWallet("Ethos Wallet"),
      connectMartianSuiWallet: () => connectWallet("Martian Sui Wallet"),
      disconnectSuiWallet: disconnectWallet,
    }),
    [connectWallet, disconnectWallet]
  );

  return walletActions;
};

export default useSuiWallet;
