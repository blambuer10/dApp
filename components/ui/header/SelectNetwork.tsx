import { Box, Center, SegmentedControl } from "@mantine/core";
import useNetworkStore from "@/stores/useNetworkStore";
import useAptosWallet from "@/hooks/aptos/useAptosWallet";
import useSuiWallet from "@/hooks/sui/useSuiWallet";
import AptosLogo from "@/public/assets/AptosLogo.png";
import SuiLogo from "@/public/assets/SuiLogo.webp";
import Image from "next/image";
type Network = "sui" | "aptos";

const SelectNetwork = () => {
  const network = useNetworkStore((state) => state.network);
  const setNetwork = useNetworkStore((state) => state.setNetwork);
  const { disconnectAptosWallet } = useAptosWallet();
  const { disconnectSuiWallet } = useSuiWallet();

  const handleNetworkChange = (value: Network) => {
    if (value === "aptos") {
      disconnectSuiWallet();
    } else {
      disconnectAptosWallet();
    }
    setNetwork(value);
  };

  const controlData = [
    {
      label: (
        <Center>
          <Image src={SuiLogo} width={25} height={25} alt="Sui Logo" />
          <Box ml={10}>Sui</Box>
        </Center>
      ),
      value: "sui",
    },
    {
      label: (
        <Center>
          <Image src={AptosLogo} width={25} height={25} alt="Aptos Logo" />
          <Box ml={10}>Aptos</Box>
        </Center>
      ),
      value: "aptos",
    },
  ] as { label: React.ReactNode; value: Network }[];

  return (
    <SegmentedControl
      transitionDuration={500}
      data={controlData}
      value={network}
      onChange={handleNetworkChange}
    />
  );
};

export default SelectNetwork;
