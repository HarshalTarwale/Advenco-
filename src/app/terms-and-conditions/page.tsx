import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsAndConditions } from "@/data/legalPages";

export const metadata: Metadata = {
  title: termsAndConditions.metaTitle,
  description: termsAndConditions.metaDescription,
};

export default function TermsAndConditions() {
  return <LegalPage content={termsAndConditions} />;
}
