import type { Metadata } from "next";
import Link from "next/link";
import { TacticalButton } from "@/components/ui/tactical-button";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Technical overview of active engineering projects, software platforms, and systems architecture at Chemist3 Labs.",
};

export default function SystemsPage() {
  return (
    <div className="bg-black text-white">
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Engineering Initiatives & Systems
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Projects & Systems Architecture
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Chemist3 Labs develops sovereign software systems, diagnostic monitors, desktop
              applications, and simulation engines. Below is an overview of our active projects and
              technical architectures.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ACTIVE PROJECTS BREAKDOWN ─────────────────────────────────── */}
      <section className="py-24 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Active Repositories & Systems
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Production systems & development tracks.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Each system is engineered with an emphasis on low overhead, zero external bloat, and
              first-principles reliability.
            </p>
          </div>

          <div className="space-y-10">
            {PROJECTS.map((track, i) => (
              <div
                key={track.id}
                id={track.id}
                className="relative border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10 scroll-mt-24"
              >
                {/* Legacy Anchor Alias */}
                <span id={`project-${i + 1}`} className="absolute -top-24 left-0" />

                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#1A1A1A] text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">{track.code}</span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-neutral-400">{track.category}</span>
                  </div>
                  <span className="text-neutral-400 border border-neutral-800 px-2.5 py-0.5">
                    Status: {track.status}
                  </span>
                </div>

                <div className="space-y-1.5 mb-4">
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    {track.title}
                  </h3>
                  <div className="text-sm font-mono text-neutral-400">
                    {track.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-4xl">
                  {track.overview}
                </p>

                {/* Technical Specifications Grid */}
                <div className="border-t border-[#1F1F1F] pt-4 mb-6">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                    Technical Specifications
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {track.specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-[#050505] border border-[#1A1A1A] p-3 text-xs font-mono"
                      >
                        <div className="text-neutral-500">{spec.label}</div>
                        <div className="text-neutral-200 mt-1 font-medium">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Capabilities */}
                <div className="border-t border-[#1A1A1A] pt-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                    Core Capabilities & Engineering Directives
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
                    {track.objectives.map((obj) => (
                      <li key={obj} className="flex items-start gap-2.5">
                        <span className="text-neutral-600 shrink-0 mt-0.5">—</span>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRIEFING CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center sm:text-left">
          <div className="border border-[#222222] bg-[#0A0A0A] p-8 sm:p-12 max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Collaborative Research & Technical Briefings
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
              We collaborate with institutional research laboratories, academic centers, and sovereign
              partners on focused projects. Inquiries are evaluated directly by our engineering leads.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TacticalButton href="/contact" variant="primary">
                Contact Engineering Desk
              </TacticalButton>
              <Link
                href="/about"
                className="text-xs font-mono text-neutral-400 hover:text-white underline underline-offset-4"
              >
                Read about our engineering philosophy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
