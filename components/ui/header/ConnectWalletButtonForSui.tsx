import Image from "next/image";
import { useState } from "react";
import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";
import WalletButton from "./WalletButton";
import useSuiWallet from "@/hooks/sui/useSuiWallet";
import Ethos from "@/public/assets/Ethos Wallet.png";
import Martian from "@/public/assets/Martian.png";
import Suiet from "@/public/assets/Suiet.svg";
import SuiLogo from "@/public/assets/SuiLogo.webp";
interface ConnectWalletButtonProps {
  type: string;
}

const walletTypes = [
  { name: "SuiWallet", onClick: "connectSuiWallet", image: SuiLogo },
  { name: "Suiet", onClick: "connectSuietWallet", image: Suiet },
  { name: "Ethos", onClick: "connectEthosWallet", image: Ethos },
  { name: "Martian", onClick: "connectMartianSuiWallet", image: Martian },
];
const ConnectWalletButtonForSui = ({ type }: ConnectWalletButtonProps) => {
  const [opened, setOpened] = useState(false);
  const connectActions = useSuiWallet();

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={closeModal}
        size={300}
        styles={{
          body: { background: "#111827", height: "370px" },
          header: { background: "#111827", justifyContent: "flex-end" },
        }}
      >
        <Stack align="center">
          <Image src={SuiLogo} width={50} height={50} alt="Sui Logo" />
          <Text ta="center" w={160} mb={20} c="white">
            Connect a wallet on Sui to continue
          </Text>
          {walletTypes.map((wallet, idx) => (
            <Group key={idx} position="center" h="100%">
              {walletTypes.slice(idx * 2, idx * 2 + 2).map((w) => (
                <WalletButton
                  key={w.name}
                  onClick={connectActions[w.onClick]}
                  walletImage={w.image}
                  walletName={w.name}
                />
              ))}
            </Group>
          ))}
        </Stack>
      </Modal>

      <Button
        variant={type === "card" ? "outline" : "white"}
        size="sm"
        leftIcon={type !== "card" ? <IconWallet size={20} /> : null}
        onClick={openModal}
        w={type === "card" ? "100%" : "auto"}
      >
        {type !== "card" ? "Connect Wallet" : "Connect"}
      </Button>
    </>
  );
};

export default ConnectWalletButtonForSui;
