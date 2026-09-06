"use client";

import { useState, type FormEvent } from "react";
import { TacticalButton } from "@/components/ui/tactical-button";
import { SITE_CONFIG } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  organization: string;
  domain: string;
  requirements: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    domain: "synthesis",
    requirements: "",
  });
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const domainLabels: Record<string, string> = {
      synthesis: "Autonomous Chemical Synthesis",
      materials: "Sovereign Materials Research",
      compliance: "Dual-Use Compliance & Audit",
      deployment: "Enterprise & Forward Deployment",
      careers: "Career Inquiry",
      other: "General Technical Inquiry",
    };

    const domainLabel = domainLabels[formData.domain] || formData.domain;
    const subject = `[Chemist3 Labs] Briefing Request: ${domainLabel} — ${formData.organization || formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organization: ${formData.organization || "Not Specified"}`,
      `Domain of Interest: ${domainLabel}`,
      "",
      "Operational Requirements & Scope:",
      formData.requirements,
      "",
      "---",
      "Sent via Chemist3 Labs Technical Inquiries Interface",
    ].join("\n");

    const mailtoUrl = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus("submitted");
  };

  const inputClasses =
    "w-full bg-[#050505] border border-[#262626] text-white px-3.5 py-2.5 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors";

  return (
    <div className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10">
      <div className="mb-8 pb-6 border-b border-[#1A1A1A]">
        <h3 className="text-xl font-medium text-white tracking-tight mb-2">
          Technical Briefing Request
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Direct inquiries to our engineering and forward-deployed desks. Submissions are
          handled directly at{" "}
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-neutral-200 underline underline-offset-4 hover:text-white"
          >
            {SITE_CONFIG.contact.email}
          </a>
          .
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Institutional Email *
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Organization / Laboratory *
            </label>
            <input
              type="text"
              required
              placeholder="Organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Domain of Interest *
            </label>
            <select
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              className={inputClasses}
            >
              <option value="synthesis">Autonomous Chemical Synthesis</option>
              <option value="materials">Sovereign Materials Discovery</option>
              <option value="compliance">Dual-Use Screening & Regulatory Enclave</option>
              <option value="deployment">Forward Deployed Engineering Engagement</option>
              <option value="careers">Career Application Inquiry</option>
              <option value="other">General Technical Inquiry</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Operational Scope & Technical Requirements *
          </label>
          <textarea
            required
            rows={5}
            placeholder="Outline your inquiry or project requirements..."
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            className={`${inputClasses} resize-y`}
          />
        </div>

        <div className="pt-4 border-t border-[#1A1A1A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-neutral-500">
            Routing destination: {SITE_CONFIG.contact.email}
          </div>
          <TacticalButton type="submit" variant="primary" size="md">
            Transmit Briefing Request
          </TacticalButton>
        </div>

        {status === "submitted" && (
          <div className="p-4 border border-neutral-800 bg-[#050505] text-xs font-mono text-neutral-300">
            Your briefing request has been drafted into your email client directed to{" "}
            <span className="text-white">{SITE_CONFIG.contact.email}</span>. If your client did
            not open automatically, please send your inquiry directly to that address.
          </div>
        )}
      </form>
    </div>
  );
}
