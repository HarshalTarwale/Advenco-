import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { motorizedBlindsPages } from "@/data/motorizedBlindsPages";

const content = motorizedBlindsPages["roman-motorised-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function RomanMotorisedBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
