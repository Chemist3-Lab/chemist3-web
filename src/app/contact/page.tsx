import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a technical briefing with the Chemist3 Labs engineering team.",
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Inquiries & Engagement
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Request a technical briefing.
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              We engage directly with institutional directors, defense operators, and materials
              science researchers. Inquiries are evaluated by senior engineering personnel under
              strict bilateral non-disclosure standards.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FORM & ENGAGEMENT GUIDELINES ──────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Engagement Protocols & Channels */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Direct Inquiries Desk
                </div>
                <div className="font-mono text-sm text-neutral-200">
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:underline underline-offset-4"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  General inquiries, technical proposals, and executive correspondence.
                </p>
              </div>

              <div className="border-t border-[#1F1F1F] pt-6 space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Response Window
                </div>
                <div className="text-sm font-medium text-neutral-300">
                  Within two business days
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Qualified research and defense-related briefing requests receive direct technical
                  triage from our Forward Deployed team.
                </p>
              </div>

              <div className="border-t border-[#1F1F1F] pt-6 space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Data Isolation Protocol
                </div>
                <div className="text-sm font-medium text-neutral-300">
                  Zero Secondary Training Guarantee
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Technical requirements and preliminary chemical structures shared during briefing
                  evaluations are never ingested into foundation models.
                </p>
              </div>

              <div className="border-t border-[#1F1F1F] pt-6 space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Governance & Compliance
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  All software and hardware interfaces comply with Chemical Weapons Convention (CWC)
                  regulations, ITAR export controls, and applicable sovereign data residency
                  statutes.
                </p>
              </div>
            </div>

            {/* Right: Technical Briefing Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
