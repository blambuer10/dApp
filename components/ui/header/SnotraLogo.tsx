import { Text, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Poppins } from "next/font/google";
const poppin = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
const SnotraLogo = () => {
  const xs = useMediaQuery("(max-width: 600px)");
  return (
    <Flex justify="center" align="center">
      <Image
        src={Logo}
        alt="Snotra Logo"
        width={xs ? 40 : 60}
        height={xs ? 40 : 60}
      />
      <Text
        variant="gradient"
        gradient={{
          from: "#df6c19",
          to: "#671cd6",
          deg: 45,
        }}
        fw="bolder"
        tt="uppercase"
        className={poppin.className}
      >
        {!xs ? "Snotra Protocol" : "Snotra"}
      </Text>
    </Flex>
  );
};

export default SnotraLogo;
