import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { productBlindsPages } from "@/data/productBlindsPages";

const content = productBlindsPages["vertical-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function VerticalBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
