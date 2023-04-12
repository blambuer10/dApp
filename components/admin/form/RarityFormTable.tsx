import {
  Divider,
  Group,
  Stack,
  Text,
  TextInput,
  NumberInput,
  Button,
} from "@mantine/core";
import ReactCardFlip from "react-card-flip";

import { IconTrash, IconEdit } from "@tabler/icons-react";
import { useState, useEffect } from "react";
interface RarityFormTableProps {
  formData: any;
  setFormData: any;
}
const RarityFormTable = ({ formData, setFormData }: RarityFormTableProps) => {
  const [rarityData, setRarityData] = useState({
    name: "",
    metadata: "",
    dailyRewardsAmount: 0,
    totalNFTinRarity: 0,
    isFlipped: false,
  });
  const [allRarities, setAllRarities] = useState<any>([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAllRarities([...allRarities, rarityData]);
    setRarityData({
      name: "",
      metadata: "",
      dailyRewardsAmount: 0,
      totalNFTinRarity: 0,
      isFlipped: false,
    });
  };

  const getAllRarities = () => {
    return allRarities.map((rarity: any, index: number) => {
      return (
        <Group position="center" key={index}>
          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
              minWidth: "180px",
            }}
            ta="center"
            p={10}
          >
            {rarity.name}
          </Text>

          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
              minWidth: "180px",
            }}
            ta="center"
            p={10}
          >
            {rarity.metadata}
          </Text>

          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
              minWidth: "80px",
            }}
            ta="center"
            p={10}
          >
            {rarity.dailyRewardsAmount}
          </Text>

          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
              minWidth: "80px",
            }}
            ta="center"
            p={10}
          >
            {rarity.totalNFTinRarity}
          </Text>
          <Button
            color="red"
            variant="outline"
            onClick={() => {
              const newRarities = allRarities.filter(
                (rarity: any, i: number) => i !== index
              );
              setAllRarities(newRarities);
            }}
          >
            <IconTrash />
          </Button>
          <Button
            color="blue"
            variant="outline"
            onClick={() => {
              const newRarities = allRarities.filter(
                (rarity: any, i: number) => i !== index
              );

              setRarityData(rarity);
              setAllRarities(newRarities);
            }}
          >
            <IconEdit />
          </Button>
        </Group>
      );
    });
  };
  const getAllRaritiesForMobile = () => {
    return allRarities.map((rarity: any, index: number) => {
      return (
        <ReactCardFlip
          isFlipped={rarity?.isFlipped}
          flipDirection="horizontal"
          key={index}
        >
          <Group
            onClick={() => {
              setAllRarities(
                allRarities.map((rarity: any, i: number) => {
                  if (i === index) {
                    return {
                      ...rarity,
                      isFlipped: !rarity.isFlipped,
                    };
                  }
                  return rarity;
                })
              );
            }}
            position="center"
            w="100%"
            p={20}
            style={{ border: "2px solid #2A303C", borderRadius: "25px" }}
            key={index}
          >
            <Stack w="180px">
              <Text
                c="#C2CACA"
                size={10}
                style={{
                  fontWeight: "bold",
                  border: "2px solid #2A303C",
                  borderRadius: "25px",
                }}
                ta="center"
                p={6}
              >
                {rarity.name}
              </Text>
              <Text
                c="#C2CACA"
                size={10}
                style={{
                  fontWeight: "bold",
                  border: "2px solid #2A303C",
                  borderRadius: "25px",
                }}
                ta="center"
                p={6}
              >
                {rarity.metadata}
              </Text>
            </Stack>
            <Stack w="40px">
              <Text
                c="#C2CACA"
                size={10}
                style={{
                  fontWeight: "bold",
                  border: "2px solid #2A303C",
                  borderRadius: "25px",
                }}
                ta="center"
                p={6}
              >
                {rarity.dailyRewardsAmount}
              </Text>
              <Text
                c="#C2CACA"
                size={10}
                style={{
                  fontWeight: "bold",
                  border: "2px solid #2A303C",
                  borderRadius: "25px",
                }}
                ta="center"
                p={6}
              >
                {rarity.totalNFTinRarity}
              </Text>
            </Stack>
          </Group>
          <Group
            onClick={() => {
              setAllRarities(
                allRarities.map((rarity: any, i: number) => {
                  if (i === index) {
                    return {
                      ...rarity,
                      isFlipped: !rarity.isFlipped,
                    };
                  }
                  return rarity;
                })
              );
            }}
            position="center"
            w="300px"
            py={20}
            style={{ border: "2px solid #2A303C", borderRadius: "25px" }}
            key={index}
          >
            <Button
              color="red"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                const newRarities = allRarities.filter(
                  (rarity: any, i: number) => i !== index
                );
                setAllRarities(newRarities);
              }}
            >
              <IconTrash />
            </Button>
            <Button
              color="blue"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                const newRarities = allRarities.filter(
                  (rarity: any, i: number) => i !== index
                );

                setRarityData({
                  ...rarity,
                  isFlipped: !rarity.isFlipped,
                });
                setAllRarities(newRarities);
              }}
            >
              <IconEdit />
            </Button>
          </Group>
        </ReactCardFlip>
      );
    });
  };

  const mobileView = () => {
    return (
      <Stack
        align="center"
        w={{
          base: "90%",
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "80%",
          xl: "80%",
        }}
      >
        <Divider
          w="80%"
          label={
            <Text
              variant="gradient"
              gradient={{ from: "#df6c19", to: "#671cd6", deg: 90 }}
              size={34}
            >
              Rarity Details
            </Text>
          }
          color="white"
          labelPosition="center"
          variant="solid"
          size="2px"
          mt={30}
        />
        <Group
          position="center"
          style={{ border: "2px solid #2A303C", borderRadius: "25px" }}
          p={8}
        >
          <Stack w="130px">
            <Text
              c="#C2CACA"
              size={10}
              style={{
                fontWeight: "bold",
                border: "2px solid #2A303C",
                borderRadius: "25px",
              }}
              ta="center"
              p={6}
            >
              Rarity Name
            </Text>
            <Text
              c="#C2CACA"
              size={10}
              style={{
                fontWeight: "bold",
                border: "2px solid #2A303C",
                borderRadius: "25px",
              }}
              ta="center"
              p={6}
            >
              NFT Metadata
            </Text>
            <Text
              c="#C2CACA"
              size={10}
              style={{
                fontWeight: "bold",
                border: "2px solid #2A303C",
                borderRadius: "25px",
              }}
              ta="center"
              p={6}
            >
              Daily Rewards Amount
            </Text>
            <Text
              c="#C2CACA"
              size={10}
              style={{
                fontWeight: "bold",
                border: "2px solid #2A303C",
                borderRadius: "25px",
              }}
              ta="center"
              p={6}
            >
              Total NFT in Rarity
            </Text>
          </Stack>
          <Stack w="140px">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Stack align="center" spacing="1rem">
                <TextInput
                  placeholder="Common"
                  size="xs"
                  value={rarityData.name}
                  onChange={(e) => {
                    setRarityData({ ...rarityData, name: e.target.value });
                  }}
                />
                <TextInput
                  placeholder="https://ipfs.io/ipfs/Qm..."
                  size="xs"
                  value={rarityData.metadata}
                  onChange={(e) => {
                    setRarityData({ ...rarityData, metadata: e.target.value });
                  }}
                />
                <NumberInput
                  placeholder="0"
                  size="xs"
                  hideControls
                  value={rarityData.dailyRewardsAmount}
                  onChange={(e) => {
                    setRarityData({
                      ...rarityData,
                      dailyRewardsAmount: +e,
                    });
                  }}
                />
                <NumberInput
                  placeholder="0"
                  size="xs"
                  hideControls
                  value={rarityData.totalNFTinRarity}
                  onChange={(e) => {
                    setRarityData({
                      ...rarityData,
                      totalNFTinRarity: +e,
                    });
                  }}
                />
                <button
                  type="submit"
                  style={{
                    display: "none",
                  }}
                >
                  Ekle
                </button>
              </Stack>
            </form>
          </Stack>
        </Group>
        {getAllRaritiesForMobile()}
      </Stack>
    );
  };
  if (isMobile) {
    return mobileView();
  }
  return (
    <>
      <Divider
        w="80%"
        label={
          <Text
            variant="gradient"
            gradient={{ from: "#df6c19", to: "#671cd6", deg: 90 }}
            size={34}
          >
            Rarity Details
          </Text>
        }
        color="white"
        labelPosition="center"
        variant="solid"
        size="2px"
        mt={30}
        mb={10}
      />

      <Stack
        w={{
          base: "90%",
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "80%",
          xl: "80%",
        }}
        py={20}
        style={{ border: "2px solid #2A303C", borderRadius: "25px" }}
      >
        <Group position="center">
          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
            }}
            p={10}
          >
            NFT Rarity Name
          </Text>

          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
            }}
            p={10}
          >
            NFT Metadata
          </Text>

          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
            }}
            p={10}
          >
            Daily Rewards Amount
          </Text>

          <Text
            c="#C2CACA"
            size={15}
            style={{
              fontWeight: "bold",
              border: "2px solid #2A303C",
              borderRadius: "25px",
            }}
            p={10}
          >
            NFTs in Total this Rarity
          </Text>
        </Group>

        {getAllRarities()}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Group position="center">
            <TextInput
              placeholder="Common"
              size="xs"
              value={rarityData.name}
              onChange={(e) => {
                setRarityData({ ...rarityData, name: e.target.value });
              }}
            />
            <TextInput
              placeholder="https://ipfs.io/ipfs/Qm..."
              size="xs"
              value={rarityData.metadata}
              onChange={(e) => {
                setRarityData({ ...rarityData, metadata: e.target.value });
              }}
            />
            <NumberInput
              placeholder="0"
              size="xs"
              hideControls
              value={rarityData.dailyRewardsAmount}
              onChange={(e) => {
                setRarityData({
                  ...rarityData,
                  dailyRewardsAmount: +e,
                });
              }}
            />
            <NumberInput
              placeholder="0"
              size="xs"
              hideControls
              value={rarityData.totalNFTinRarity}
              onChange={(e) => {
                setRarityData({
                  ...rarityData,
                  totalNFTinRarity: +e,
                });
              }}
            />
            <button
              type="submit"
              style={{
                display: "none",
              }}
            >
              Ekle
            </button>
          </Group>
        </form>
      </Stack>
    </>
  );
};

export default RarityFormTable;
