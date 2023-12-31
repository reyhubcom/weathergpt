import { PageData } from "../components/page-data";
import { getWeatherData } from "../lib/utils";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}) {
  const data = await getWeatherData(params.location);

  return {
    title: `${data.location.name} Staking | Wiki Validar & Delegate`,
    description:
      "Staking Is a Way of Earning Rewards for Holding Cryptocurrencies.",
    twitter: {
      card: "summary_large_image",
      title: `${data.location.name} Staking | Wiki Validar & Delegate`,
      description:
        "Staking Is a Way of Earning Rewards for Holding Cryptocurrencies.",
      creator: "@steventey",
    },
    themeColor: "#FFF",
  };
}

export default async function Location({
  params,
}: {
  params: { location: string };
}) {
  const data = await getWeatherData(params.location);

  return <PageData data={data} />;
}
