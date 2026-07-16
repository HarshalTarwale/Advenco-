import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { productBlindsPages } from "@/data/productBlindsPages";

const content = productBlindsPages["wooden-window-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function WoodenWindowBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
