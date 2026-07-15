import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { blindScreensPage } from "@/data/blindScreensPage";

export const metadata: Metadata = {
  title: blindScreensPage.metaTitle,
  description: blindScreensPage.metaDescription,
};

export default function BlindsScreens() {
  return <CommercialBlindPage content={blindScreensPage} />;
}
