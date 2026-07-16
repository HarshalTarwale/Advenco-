import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { aboutMeta } from "@/data/aboutPage";

export const metadata: Metadata = {
  title: aboutMeta.metaTitle,
  description: aboutMeta.metaDescription,
};

export default function AboutUs() {
  return <AboutPage />;
}
