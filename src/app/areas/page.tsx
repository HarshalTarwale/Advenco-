import type { Metadata } from "next";
import AreasPage from "@/components/AreasPage";
import { areasMeta } from "@/data/areasPage";

export const metadata: Metadata = {
  title: areasMeta.metaTitle,
  description: areasMeta.metaDescription,
};

export default function Areas() {
  return <AreasPage />;
}
