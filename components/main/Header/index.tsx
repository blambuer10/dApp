import { Header, Flex } from "@mantine/core";
import ConnectWalletButton from "@/components/ui/header/ConnectWalletButtonForAptos";
import ConnectWalletButtonForSui from "@/components/ui/header/ConnectWalletButtonForSui";
import SnotraLogo from "@/components/ui/header/SnotraLogo";
import UserInfoButton from "@/components/ui/header/UserInfoButton";
import SelectNetwork from "@/components/ui/header/SelectNetwork";
import useAptosStore from "@/stores/useAptosStore";
import useNetworkStore from "@/stores/useNetworkStore";
import { useWallet } from "@suiet/wallet-kit";

const headerStyles = {
  height: "100%",
  width: "100%",
  background: "#191D24",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  letterSpacing: "0.1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const HeaderComponent = () => {
  const network = useNetworkStore((state) => state.network);
  const userWallet = useAptosStore((state) => (state as any).userWallet);
  const { connected,account } = useWallet();
  console.log("connected", connected);
  console.log("account", account);
  return (
    <Header
      height={{
        base: 80,
        xs: 90,
        md: 60,
        lg: 60,
        xl: 70,
      }}
      style={headerStyles}
    >
      <Flex w="80%" mx="auto" align="center" justify="space-between">
        <SnotraLogo />
        <Flex gap={30} align="center">
          <SelectNetwork />
          {network === "aptos" ? (
            userWallet ? (
              <UserInfoButton />
            ) : (
              <ConnectWalletButton type="header" />
            )
          ) : connected ? (
            <UserInfoButton />
          ) : (
            <ConnectWalletButtonForSui type="header" />
          )}
        </Flex>
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
