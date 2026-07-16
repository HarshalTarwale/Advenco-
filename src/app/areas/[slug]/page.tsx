import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TownAreaPage from "@/components/TownAreaPage";
import { getTownContent, getAllTownSlugs } from "@/data/areas";

export async function generateStaticParams() {
  return getAllTownSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const content = await getTownContent(slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function TownArea(props: PageProps<"/areas/[slug]">) {
  const { slug } = await props.params;
  const content = await getTownContent(slug);
  if (!content) notFound();
  return <TownAreaPage content={content} />;
}
