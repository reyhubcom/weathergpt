import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Staking | Wiki Validator & Delegate",
  description:
    "Staking Is a Way of Earning Rewards for Holding Cryptocurrencies.",
  twitter: {
    card: "summary_large_image",
    title:
      "WeatherGPT - ChatGPT Plugin to get the weather of any given location",
    description:
      "Staking Is a Way of Earning Rewards for Holding Cryptocurrencies.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://osis.exchange"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
