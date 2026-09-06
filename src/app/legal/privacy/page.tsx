import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/content";
import { LegalViewer } from "@/components/legal-viewer";

export const metadata: Metadata = {
  title: "Enterprise Privacy Policy",
  description:
    "Chemist3 Labs Enterprise Privacy Policy, Data Protection Notice, and Zero Secondary Training Covenant.",
};

export default function PrivacyPage() {
  const document = getLegalDocument("privacy");

  if (!document) {
    notFound();
  }

  return <LegalViewer document={document} />;
}
