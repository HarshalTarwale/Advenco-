import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { blindsByRoomPages } from "@/data/blindsByRoomPages";

const content = blindsByRoomPages["living-room-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function LivingRoomBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
