import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { verticalBlindsPages } from "@/data/verticalBlindsPages";

const content = verticalBlindsPages["waterproof-vertical-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function WaterproofVerticalBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
