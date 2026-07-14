import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { blindsByRoomPages } from "@/data/blindsByRoomPages";

const content = blindsByRoomPages["office-window-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function OfficeWindowBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
