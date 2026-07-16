import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/data/legalPages";

export const metadata: Metadata = {
  title: privacyPolicy.metaTitle,
  description: privacyPolicy.metaDescription,
};

export default function PrivacyPolicy() {
  return <LegalPage content={privacyPolicy} />;
}
