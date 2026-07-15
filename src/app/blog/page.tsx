import type { Metadata } from "next";
import BlogPage from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Advenco Blinds and Shutters",
  description:
    "Ideas, guides, and inspiration for dressing your windows — blinds, shutters, and seasonal care advice from Advenco Blinds and Shutters.",
};

export default function Blog() {
  return <BlogPage />;
}
