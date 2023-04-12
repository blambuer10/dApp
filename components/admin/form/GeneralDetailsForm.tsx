import { Divider, Group, Stack, Text, TextInput } from "@mantine/core";

interface GeneralDetailsFormProps {
  formData: any;
  setFormData: any;
}

const GeneralDetailsForm = ({
  formData,
  setFormData,
}: GeneralDetailsFormProps) => {
  return (
    <>
      <Divider
        w="80%"
        label={
          <Text
            variant="gradient"
            gradient={{ from: "#df6c19", to: "#671cd6", deg: 90 }}
            size={36}
          >
            General Details
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
        py={20}
        w={{
          base: "90%",
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "80%",
          xl: "80%",
        }}
        style={{
          border: "2px solid #2A303C",
          borderRadius: "25px",
        }}
      >
        <Group position="center">
          <Text
            c="#C2CACA"
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
            size={20}
          >
            Name of the Collection
          </Text>

          <TextInput
            w="50%"
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Group>
        <Group
          m={"auto"}
          w={{
            base: "90%",
            xs: "90%",
            sm: "90%",
            md: "50%",
            lg: "50%",
            xl: "50%",
          }}
          ml={{
            base: "auto",
            xs: "auto",
            sm: "auto",
            md: "30% !important",
            lg: "30% !important",
            xl: "45% !important",
          }}
          spacing={0}
          position="center"
          style={{
            border: "2px solid #2A303C",
            borderRadius: "15px",
          }}
        >
          <Text p={10}>https://</Text>
          <Text variant="gradient" p={10} miw={30}>
            {formData?.name ? formData.name : "Collection Name"}
          </Text>
          <Text p={10}>.snotra.tech</Text>
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
            Collection Description
          </Text>

          <TextInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
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
            NFT Image
          </Text>
          <TextInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            placeholder="https://"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
        </Group>
      </Stack>
    </>
  );
};

export default GeneralDetailsForm;
