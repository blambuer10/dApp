import { useState } from "react";
import { DateTimePicker, DateValue } from "@mantine/dates";
import {
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Divider,
  Radio,
  Switch,
  NumberInput,
  Textarea,
} from "@mantine/core";
import GeneralDetailsForm from "@/components/admin/form/GeneralDetailsForm";
import StakingDetailsForm from "@/components/admin/form/StakingDetailsForm";
import CollectionDetailsForm from "@/components/admin/form/CollectionDetailsForm";
import RarityFormTable from "@/components/admin/form/RarityFormTable";
type FormData = {
  name: string;
  url: string;
  description: string;
  rewardTokenMintAddress: string;
  lockPeriod: string;
  rarityEnabled: boolean;
  poolPeriodDays: number;
  dailyRewardAmount: string;
  totalRewardAmount: string;
  poolStartTime: DateValue;
  nftMintPrice: string;
  totalNftCount: number;
  nftHashList: string;
};

const AdminPanel = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    url: "",
    description: "",
    rewardTokenMintAddress: "",
    lockPeriod: "",
    rarityEnabled: false,
    poolPeriodDays: 0,
    dailyRewardAmount: "",
    totalRewardAmount: "",
    poolStartTime: new Date(),
    nftMintPrice: "",
    totalNftCount: 0,
    nftHashList: "",
  });
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      pb={30}
      mt={20}
      bg="#191D24"
      style={{
        background: "#191D24",
        borderRadius: "25px",
      }}
    >
      {/* {JSON.stringify(formData, null, 2)} */}
      <GeneralDetailsForm formData={formData} setFormData={setFormData} />
      <StakingDetailsForm formData={formData} setFormData={setFormData} />
      <CollectionDetailsForm formData={formData} setFormData={setFormData} />
      {formData?.rarityEnabled && (
        <RarityFormTable formData={formData} setFormData={setFormData} />
      )}
    </Flex>
  );
};

export default AdminPanel;
