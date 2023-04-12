import {
  Divider,
  Group,
  NumberInput,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
interface CollectionDetailsFormProps {
  formData: any;
  setFormData: any;
}
const CollectionDetailsForm = ({
  formData,
  setFormData,
}: CollectionDetailsFormProps) => {
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
            Collection Details
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
            size={20}
            ta={{
              base: "center",
              xs: "center",
              sm: "center",
              md: "right",
              lg: "right",
              xl: "right",
            }}
            w={{
              base: "90%",
              xs: "90%",
              sm: "90%",
              md: "30%",
              lg: "30%",
              xl: "30%",
            }}
          >
            NFT mint price
          </Text>
          <TextInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            value={formData.nftMintPrice}
            onChange={(e) =>
              setFormData({ ...formData, nftMintPrice: e.target.value })
            }
          />
        </Group>
        <Group position="center">
          <Text
            c="#C2CACA"
            size={20}
            ta={{
              base: "center",
              xs: "center",
              sm: "center",
              md: "right",
              lg: "right",
              xl: "right",
            }}
            w={{
              base: "90%",
              xs: "90%",
              sm: "90%",
              md: "30%",
              lg: "30%",
              xl: "30%",
            }}
          >
            Toplam NFT sayısı ve Her bir Rarity deki NFT sayısı
          </Text>
          <NumberInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            hideControls
            value={formData.totalNftCount}
            onChange={(e) => setFormData({ ...formData, totalNftCount: +e })}
          />
        </Group>
        <Group position="center">
          <Text
            c="#C2CACA"
            size={20}
            ta={{
              base: "center",
              xs: "center",
              sm: "center",
              md: "right",
              lg: "right",
              xl: "right",
            }}
            w={{
              base: "90%",
              xs: "90%",
              sm: "90%",
              md: "30%",
              lg: "30%",
              xl: "30%",
            }}
          >
            NFT Hash List
          </Text>
          <Textarea
            required
            placeholder='[
          "58sd6f78sdg89s7f8ds98h7gf87dsdf8",   
          "58sd6f78sdg89s7f8ds98h7gf87dsdf8",
      ]'
            variant="default"
            minRows={7}
            style={{ width: 300 }}
            value={formData.nftHashList}
            onChange={(e) =>
              setFormData({ ...formData, nftHashList: e.target.value })
            }
          />
        </Group>
      </Stack>
    </>
  );
};

export default CollectionDetailsForm;
