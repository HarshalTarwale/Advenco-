import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { perfectFitBlindsPages } from "@/data/perfectFitBlindsPages";

const content = perfectFitBlindsPages["perfect-fit-day-and-night-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function PerfectFitDayAndNightBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
