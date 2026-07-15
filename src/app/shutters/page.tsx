import type { Metadata } from "next";
import ShuttersPage from "@/components/ShuttersPage";
import { shuttersContent } from "@/data/shuttersPage";

export const metadata: Metadata = {
  title: shuttersContent.metaTitle,
  description: shuttersContent.metaDescription,
};

export default function Shutters() {
  return <ShuttersPage />;
}
