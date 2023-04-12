import Image from "next/image";
import { useState } from "react";
import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";
import useConnectWallet from "@/hooks/aptos/useAptosWallet";
import WalletButton from "./WalletButton";
import Pontem from "@/public/assets/Pontem.png";
import Martian from "@/public/assets/Martian.png";
import Petra from "@/public/assets/Petra.png";
import Fewcha from "@/public/assets/Fewcha.png";
import AptosLogo from "@/public/assets/AptosLogo.png";

interface ConnectWalletButtonProps {
  type: string;
}

const walletTypes = [
  { name: "Petra", onClick: "connectPetraWallet", image: Petra },
  { name: "Martian", onClick: "connectMartianWallet", image: Martian },
  { name: "Pontem", onClick: "connectPontemWallet", image: Pontem },
  { name: "Fewcha", onClick: "connectFewchaWallet", image: Fewcha },
];

const ConnectWalletButtonForAptos = ({ type }: ConnectWalletButtonProps) => {
  const connectActions = useConnectWallet();
  const [opened, setOpened] = useState(false);

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
          <Image src={AptosLogo} width={50} height={50} alt="Aptos Logo" />
          <Text ta="center" w={160} mb={20} c="white">
            Connect a wallet on Aptos to continue
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

export default ConnectWalletButtonForAptos;
