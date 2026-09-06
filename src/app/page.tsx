import Link from "next/link";
import { TacticalButton } from "@/components/ui/tactical-button";
import { PROJECTS, COMPANY_THESIS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-28 border-b border-[#1F1F1F]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
            Chemist3 Labs / Research & Engineering
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
            Computational systems for advanced chemistry and materials research.
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            We engineer software platforms and exploratory hardware integration pipelines
            designed to accelerate the discovery, verification, and synthesis of critical
            materials for high-consequence operational domains.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <TacticalButton href="/systems" variant="primary" size="lg">
              View Active Projects
            </TacticalButton>
            <TacticalButton href="/contact" variant="secondary" size="lg">
              Request Technical Briefing
            </TacticalButton>
          </div>
        </div>
      </section>

      {/* ─── ACTIVE PROJECTS SECTION (FORMERLY OPERATIONAL WORKFLOW) ──── */}
      <section className="py-24 sm:py-32 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Engineering Initiatives
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
              Active projects & exploratory initiatives.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              An overview of our current development tracks and exploratory engineering projects.
              These initiatives represent ongoing research and prototyping efforts across computational
              modeling, graph search, and hardware interfacing.
            </p>
          </div>

          {/* Projects Breakdown (All 6 Active Repositories) */}
          <div className="space-y-6">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                id={project.id}
                className="relative border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10 scroll-mt-24"
              >
                {/* Legacy Anchor Alias */}
                <span id={`project-${i + 1}`} className="absolute -top-24 left-0" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Project Meta */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-white">
                        {project.title.toUpperCase()}
                      </span>
                      <span className="text-neutral-600">/</span>
                      <span className="font-mono text-xs text-neutral-400">
                        {project.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-white tracking-tight">
                      {project.subtitle}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="inline-block text-[11px] font-mono text-neutral-400 border border-neutral-800 px-2.5 py-1">
                        {project.category}
                      </span>
                      <span className="inline-block text-[11px] font-mono text-neutral-400 border border-neutral-800 px-2.5 py-1">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Overview & Parameters */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="border-t border-[#1F1F1F] pt-4">
                      <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                        Project Scope & Status Parameters
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.specifications.map((spec) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center sm:text-left">
            <Link
              href="/systems"
              className="inline-flex items-center text-xs font-mono text-neutral-300 hover:text-white underline underline-offset-4"
            >
              Inspect technical documentation & project architecture →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OPERATIONAL THESIS (2-COLUMN EDITORIAL) ────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[#1F1F1F] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
                Operating Thesis
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Why Chemist3 Labs was formed.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Critical materials and autonomous chemical synthesis are foundational to national
                resilience. Our operating principles reflect the gravity of the problems we solve.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="text-xs font-mono text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  Learn more about our team and methodology →
                </Link>
              </div>
            </div>

            {/* Right Thesis Breakdown */}
            <div className="lg:col-span-8 divide-y divide-[#1F1F1F]">
              {COMPANY_THESIS.map((thesis) => (
                <div key={thesis.number} className="py-8 first:pt-0 last:pb-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-500">{thesis.number}</span>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      {thesis.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed pl-7">
                    {thesis.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRIEFING CTA DESK ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-[#222222] bg-[#0A0A0A] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl space-y-6">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                Direct Inquiries Desk
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
                Request a Technical Briefing
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                We engage directly with institutional directors, materials researchers, and sovereign
                operators. Inquiries are handled under non-disclosure agreements with zero secondary
                training on shared project workloads.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <TacticalButton href="/contact" variant="primary" size="lg">
                  Initiate Briefing Request
                </TacticalButton>
                <a
                  href="mailto:contact@chemist3.com"
                  className="font-mono text-xs text-neutral-400 hover:text-white underline underline-offset-4"
                >
                  Direct Desk: contact@chemist3.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
