import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { commercialBlindsPages } from "@/data/commercialBlindsPages";

const content = commercialBlindsPages["window-blinds-for-hotels"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function WindowBlindsForHotelsPage() {
  return <CommercialBlindPage content={content} />;
}
