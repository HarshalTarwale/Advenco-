import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { veluxBlindsPages } from "@/data/veluxBlindsPages";

const content = veluxBlindsPages["roofline-window-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function RooflineWindowBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
