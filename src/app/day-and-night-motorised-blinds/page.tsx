import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { motorizedBlindsPages } from "@/data/motorizedBlindsPages";

const content = motorizedBlindsPages["day-and-night-motorised-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function DayAndNightMotorisedBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
