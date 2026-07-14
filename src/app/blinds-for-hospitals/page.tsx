import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { commercialBlindsPages } from "@/data/commercialBlindsPages";

const content = commercialBlindsPages["blinds-for-hospitals"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function BlindsForHospitalsPage() {
  return <CommercialBlindPage content={content} />;
}
