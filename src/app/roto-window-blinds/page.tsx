import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { veluxBlindsPages } from "@/data/veluxBlindsPages";

const content = veluxBlindsPages["roto-window-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function RotoWindowBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
