import { Footer, Text } from "@mantine/core";
import Image from "next/image";

const FooterComponent = () => {
  const footerStyles = {
    background: "#191D24",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "0.1rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <Footer
      height={{
        base: 80,
        xs: 90,
        md: 60,
        lg: 60,
        xl: 70,
      }}
      style={footerStyles}
      withBorder={false}
    >
      <Text>
        © 2023 Snotra
        <Image
          src="/assets/Logo.png"
          alt="Snotra Logo"
          width={30}
          height={30}
        />
      </Text>
      <Text>Terms of Service</Text>
      <Text>Privacy Policy</Text>
    </Footer>
  );
};

export default FooterComponent;
