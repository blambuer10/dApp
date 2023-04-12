import Image from "next/image";
import { Poppins } from "next/font/google";
import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { IconCopy, IconLogout, IconCheck } from "@tabler/icons-react";
import { useClipboard } from "@mantine/hooks";
import useAptosWallet from "@/hooks/aptos/useAptosWallet";
import useSuiWallet from "@/hooks/sui/useSuiWallet";
import useNetworkStore from "@/stores/useNetworkStore";
const poppin = Poppins({
  weight: "700",
  subsets: ["latin"],
});

interface UserInfoModalProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  address?: string;
  providerName?: string;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  opened,
  setOpened,
  address,
  providerName,
}) => {
  const clipboard = useClipboard({ timeout: 1000 });
  const network = useNetworkStore((state) => state.network);

  const { disconnectSuiWallet } = useSuiWallet();
  const { disconnectAptosWallet } = useAptosWallet();

  const disconnectWallet = () => {
    if (network === "sui") {
      disconnectSuiWallet();
    } else {
      disconnectAptosWallet();
    }
  };

  return (
    <Modal
      styles={{
        body: { background: "#111827" },
        header: { background: "#111827", justifyContent: "flex-end" },
      }}
      size={350}
      radius={40}
      opened={opened}
      centered
      onClose={() => setOpened(false)}
    >
      <Stack align="center" spacing="md">
        {providerName && (
          <Image
            src={
              providerName === "Suiet"
                ? "/assets/Suiet.svg"
                : "/assets/" + providerName + ".png"
            }
            width={50}
            height={50}
            alt="provider logo"
            style={{ borderRadius: "50%" }}
          />
        )}
        <Text className={poppin.className} c="white">
          {address?.slice(0, 6) + "..." + address?.slice(-4)}
        </Text>
        <Group mb={20} position="center">
          <Button
            onClick={() => {
              clipboard.copy(address);
            }}
            leftIcon={
              clipboard.copied ? (
                <IconCheck size={20} />
              ) : (
                <IconCopy size={20} />
              )
            }
            c="white"
          >
            {clipboard.copied ? "Copied" : "Copy Address"}
          </Button>
          <Button
            onClick={disconnectWallet}
            leftIcon={<IconLogout size={20} />}
            c="white"
          >
            Disconnect
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default UserInfoModal;
