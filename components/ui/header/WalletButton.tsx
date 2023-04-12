import { Button, Stack, Text } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface WalletButtonProps {
  walletImage: StaticImageData;
  walletName: string;
  onClick?: () => void;
}

const WalletButton: React.FC<WalletButtonProps> = ({
  walletImage,
  walletName,
  onClick = () => {},
}) => {
  return (
    <Button
      variant="filled"
      w={80}
      h={80}
      p={10}
      bg="#1f2937"
      color="white"
      onClick={onClick}
    >
      <Stack align="center" justify="center" spacing="xs">
        <Image
          src={walletImage}
          alt={`${walletName} Wallet`}
          width={30}
          height={30}
        />
        <Text>{walletName}</Text>
      </Stack>
    </Button>
  );
};

export default WalletButton;
