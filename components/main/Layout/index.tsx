import React from "react";
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";
import { AppShell } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppShell
      w={{
        xs: "100%",
        sm: "100%",
        md: "80%",
        lg: "80%",
        xl: "80%",
      }}
      mx="auto"
      header={<HeaderComponent />}
      footer={<FooterComponent />}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
