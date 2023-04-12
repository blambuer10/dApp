import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return <div className={inter.className}>Homepage</div>;
}
