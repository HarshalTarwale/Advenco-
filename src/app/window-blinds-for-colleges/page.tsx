import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { commercialBlindsPages } from "@/data/commercialBlindsPages";

const content = commercialBlindsPages["window-blinds-for-colleges"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function WindowBlindsForCollegesPage() {
  return <CommercialBlindPage content={content} />;
}
