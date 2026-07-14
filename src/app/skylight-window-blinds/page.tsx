import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { veluxBlindsPages } from "@/data/veluxBlindsPages";

const content = veluxBlindsPages["skylight-window-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function SkylightWindowBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
