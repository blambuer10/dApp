import {
  Divider,
  Group,
  NumberInput,
  Radio,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
interface StakingDetailsFormProps {
  formData: any;
  setFormData: any;
}
const StakingDetailsForm = ({
  formData,
  setFormData,
}: StakingDetailsFormProps) => {
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
            Staking Details
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
            Rewards Token mint address
          </Text>
          <TextInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            value={formData.rewardTokenMintAddress}
            onChange={(e) =>
              setFormData({
                ...formData,
                rewardTokenMintAddress: e.target.value,
              })
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
            Please Choose “Lock Period”
          </Text>
          <Radio.Group
            name="favoriteFramework"
            withAsterisk
            value={formData.lockPeriod}
            onChange={(e) => setFormData({ ...formData, lockPeriod: e })}
          >
            <Group>
              <Radio value="Flexible" label="Flexible" />
              <Radio value="3M" label="3M" />
              <Radio value="6M" label="6M" />
              <Radio value="12M" label="12M" />
            </Group>
          </Radio.Group>
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
            Rarity var mı? Yes / No
          </Text>

          <Switch
            style={{ justifyContent: "center" }}
            w={{
              base: "15%",
              xs: "15%",
              sm: "15%",
              md: 300,
              lg: 300,
              xl: 300,
            }}
            label="Yes/No"
            checked={formData.rarityEnabled}
            onChange={(e) =>
              setFormData({ ...formData, rarityEnabled: e.target.checked })
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
            Pool Period (in days)
          </Text>
          <NumberInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            hideControls
            value={formData.poolPeriodDays}
            onChange={(e) => setFormData({ ...formData, poolPeriodDays: +e })}
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
            Daily Reward Amount/NFT
          </Text>
          <TextInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            value={formData.dailyRewardAmount}
            onChange={(e) =>
              setFormData({ ...formData, dailyRewardAmount: e.target.value })
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
            Total Reward Amount
          </Text>
          <TextInput
            required
            variant="default"
            size="lg"
            style={{ width: 300 }}
            value={formData.totalRewardAmount}
            onChange={(e) =>
              setFormData({ ...formData, totalRewardAmount: e.target.value })
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
            Set Date and Time for Pool Creation (UTC 0)
          </Text>
          <DateTimePicker
            valueFormat="DD MMM YYYY hh:mm A"
            style={{ width: 300 }}
            size="lg"
            value={formData.poolStartTime}
            onChange={(e) => setFormData({ ...formData, poolStartTime: e })}
          />
        </Group>
      </Stack>
    </>
  );
};

export default StakingDetailsForm;
