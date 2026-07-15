import type { Metadata } from "next";
import ShowroomPage from "@/components/ShowroomPage";
import { morleyShowroom } from "@/data/showroomPages";

export const metadata: Metadata = {
  title: morleyShowroom.metaTitle,
  description: morleyShowroom.metaDescription,
};

export default function MorleyShowroom() {
  return <ShowroomPage content={morleyShowroom} />;
}
