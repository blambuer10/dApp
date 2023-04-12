import { useState } from "react";
import { Poppins } from "next/font/google";
import { Button, Text, Avatar, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useWallet } from "@suiet/wallet-kit";
import useNetworkStore from "@/stores/useNetworkStore";
import useAptosStore from "@/stores/useAptosStore";
import UserInfoModal from "./UserInfoModal";
const poppin = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const UserInfoButton = () => {
  const network = useNetworkStore((state) => state.network);
  const [opened, setOpened] = useState(false);
  const wallet = useWallet();
  const userWallet = useAptosStore((state) => (state as any).userWallet);
  let providerName = network === "sui" ? wallet?.name : userWallet?.provider;
  const address = network === "sui" ? wallet?.address : userWallet?.address;
  if (providerName === "Martian Sui Wallet") {
    providerName = "Martian";
  }
  console.log("userWallet :>> ", userWallet);
  console.log("wallet :>> ", wallet);
  return (
    <>
      <UserInfoModal
        opened={opened}
        setOpened={setOpened}
        address={address}
        providerName={providerName}
      />
      <Button
        px={5}
        h={40}
        className={poppin.className}
        radius={10}
        bg="white"
        sx={(theme) => ({
          transition: "all 0.1s ease",
          "&:hover": {
            transform: ["scale(1.03)"],
            backgroundColor: "white !important",
          },
        })}
        onClick={() => setOpened(true)}
      >
        <Group
          style={{ borderRadius: "10px" }}
          align="center"
          spacing="xs"
          bg={"#e0e0e0"}
          px={5}
        >
          <Avatar
            radius="xl"
            size="20px"
            src={
              providerName === "Suiet"
                ? "/assets/Suiet.svg"
                : "/assets/" + providerName + ".png"
            }
          />
          <Text c="#333">
            {address?.slice(0, 6) + "..." + address?.slice(-4)}
          </Text>
          <IconChevronDown color="#333" />
        </Group>
      </Button>
    </>
  );
};

export default UserInfoButton;
