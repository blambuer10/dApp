import {
  Card,
  Text,
  BackgroundImage,
  Flex,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import Image from "next/image";
import { IconDiscountCheckFilled, IconCalculator } from "@tabler/icons-react";
import useAptosStore from "@/stores/useAptosStore";
import ConnectWalletButton from "../header/ConnectWalletButtonForAptos";
interface CollectionCardProps {
  name: string;
  bannerImage: string;
  profileImage: string;
  description: string;
  status: string;
  apy: number;
  totalNFTs: number;
  totalNFTStaked: number;
}
const CollectionCard = ({
  name,
  bannerImage,
  profileImage,
  description,
  status,
  apy,
  totalNFTs,
  totalNFTStaked,
}: CollectionCardProps) => {
  const userWallet = useAptosStore((state) => (state as any).userWallet);

  return (
    <Card bg="#1a2331" w={350} shadow="xl" padding="lg" radius="md" withBorder>
      <Card.Section>
        <BackgroundImage src={bannerImage}
        component="a"
        href="https://mantine.dev"
        target="_blank"
        >
          <Flex h={100}>
            <Image
              src={profileImage}
              alt={name}
              width={60}
              height={60}
              style={{
                position: "relative",
                top: "20%",
                left: "3%",
                borderRadius: "10%",
                padding: "5px",
                border: "2px solid #fff",
              }}
            />
          </Flex>
          <Text
            c="white"
            fz="xl"
            fw={700}
            transform="capitalize"
            style={{
              position: "absolute",
              top: "3%",
              left: "25%",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            {name}
            <Text c="#38bdf8" span>
              <IconDiscountCheckFilled size={20} />
            </Text>
          </Text>
        </BackgroundImage>
      </Card.Section>
      <Group mt={10} position="apart" align="center">
        <Text fw={700} fz="xl" c="#e5e7eb">
          APY:
        </Text>
        <Text
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          ta="center"
          c="#e5e7eb"
          fz="xl"
        >
          {apy}%
          <IconCalculator size={20} />
        </Text>
      </Group>
      <Stack
        spacing={4}
        align="flex-start"
        mt={20}
        bg="#2a303c"
        style={{
          borderRadius: "10px",
        }}
        p="md"
      >
        <Text fz="md" c="#e5e7eb">
          EARNED
        </Text>
        <Text mt={10} fz="md" c="#e5e7eb">
          0 APT
        </Text>
        <Text fz="xs" c="#e5e7eb">
          ~ 0 USD
        </Text>
      </Stack>
      <Group h={100}>
        <Stack
          w="47%"
          h="100%"
          spacing={0}
          align="flex-start"
          p="xs"
          bg="#2a303c"
          mt={20}
          justify="center"
          style={{
            borderRadius: "10px",
          }}
        >
          <Text fw={500} fz="xs" c="#e5e7eb">
            TOTAL NFTs STAKED
          </Text>
          <Text mt={10} fz="md" c="#e5e7eb">
            {totalNFTStaked} items (8.06%)
          </Text>
        </Stack>
        <Stack
          h="100%"
          w="47%"
          spacing={4}
          align="center"
          justify="center"
          p="xs"
          mt={20}
          bg="#2a303c"
          style={{
            borderRadius: "10px",
          }}
        >
          <Text fw={500} fz="xl" c="#d02770">
            {status}
          </Text>
        </Stack>
      </Group>
      <Text fw={500} fz="lg" my={30} c="#9ca39b">
        Staking
      </Text>
      {userWallet ? (
        <Button
          mt={10}
          w="100%"
          variant="outline"
          color="red"
          style={{
            borderRadius: "10px",
            border: "2px solid #d02770",
            color: "#d02770",
          }}
        >
          Stake
        </Button>
      ) : <ConnectWalletButton type="card" />
      }
    </Card>
  );
};

export default CollectionCard;
