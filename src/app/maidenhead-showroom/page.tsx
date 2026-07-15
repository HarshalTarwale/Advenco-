import type { Metadata } from "next";
import ShowroomPage from "@/components/ShowroomPage";
import { maidenheadShowroom } from "@/data/showroomPages";

export const metadata: Metadata = {
  title: maidenheadShowroom.metaTitle,
  description: maidenheadShowroom.metaDescription,
};

export default function MaidenheadShowroom() {
  return <ShowroomPage content={maidenheadShowroom} />;
}
