import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { verticalBlindsPages } from "@/data/verticalBlindsPages";

const content = verticalBlindsPages["bifold-door-vertical-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function BifoldDoorVerticalBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
