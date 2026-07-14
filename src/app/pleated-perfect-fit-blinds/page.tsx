import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { perfectFitBlindsPages } from "@/data/perfectFitBlindsPages";

const content = perfectFitBlindsPages["pleated-perfect-fit-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function PleatedPerfectFitBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
