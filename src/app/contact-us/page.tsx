import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Advenco Blinds and Shutters",
  description:
    "Book a free quote with Advenco Blinds and Shutters — visit our Morley or Maidenhead showroom, or request a home consultation.",
};

export default function ContactUs() {
  return <ContactPage />;
}
