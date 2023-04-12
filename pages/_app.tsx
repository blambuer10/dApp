import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/main/Layout";
import { Notifications } from "@mantine/notifications";
import {
  WalletProvider,
  SuietWallet,
  SuiWallet,
  EthosWallet,
  MartianWallet,
} from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Snotra Protocol</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            dark: [
              "#999",
              "#888",
              "#777",
              "#666",
              "#555",
              "#444",
              "#333",
              "#2A303C",
              "#111",
              "#000",
            ],
          },
        }}
      >
        <WalletProvider
          defaultWallets={[SuiWallet, SuietWallet, EthosWallet, MartianWallet]}
          autoConnect={false}
        >
          <Layout>
            <Notifications />
            <Component {...pageProps} />
          </Layout>
        </WalletProvider>
      </MantineProvider>
    </>
  );
}

// color neon green #19dfd1
// color pink #db54f8
// color red #e90871
// color orange #fda352
// color purple #671cd6
