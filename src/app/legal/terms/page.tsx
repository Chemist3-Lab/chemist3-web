import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/content";
import { LegalViewer } from "@/components/legal-viewer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Chemist3 Labs Enterprise Terms of Service and Master Platform Conditions.",
};

export default function TermsPage() {
  const document = getLegalDocument("terms");

  if (!document) {
    notFound();
  }

  return <LegalViewer document={document} />;
}
