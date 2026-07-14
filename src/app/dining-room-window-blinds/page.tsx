import type { Metadata } from "next";
import CommercialBlindPage from "@/components/CommercialBlindPage";
import { blindsByRoomPages } from "@/data/blindsByRoomPages";

const content = blindsByRoomPages["dining-room-window-blinds"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function DiningRoomWindowBlindsPage() {
  return <CommercialBlindPage content={content} />;
}
