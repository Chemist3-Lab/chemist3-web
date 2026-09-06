import type { Metadata } from "next";
import Link from "next/link";
import { TacticalButton } from "@/components/ui/tactical-button";
import { COMPANY_THESIS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The thesis, methodology, and operating principles behind Chemist3 Labs.",
};

const OPERATING_STANDARDS = [
  {
    title: "Empirical Grounding Over Theoretical Demonstration",
    description:
      "In silico calculations and generative molecular models are hypotheses, not solutions. At Chemist3 Labs, our operational standard requires physically verified, analytically characterized chemical material. If a synthetic pathway cannot be executed in automated flow hardware, it is not considered viable.",
  },
  {
    title: "The Forward Deployed Model",
    description:
      "We do not build software in isolation from the physical environment where it executes. Our engineers deploy directly alongside laboratory scientists, chemical plant operators, and defense practitioners. When code fails in production, the engineers who wrote it are on site to diagnose, refactor, and verify the fix.",
  },
  {
    title: "Architectural Sovereignty & Cryptographic Isolation",
    description:
      "Advanced chemical research represents critical national and commercial intellectual property. We enforce absolute cryptographic isolation across customer environments. Under our Zero Secondary Training Covenant, client operational data, proprietary libraries, and simulation outputs are never ingested into foundation models.",
  },
  {
    title: "Dual-Use Vigilance & Non-Proliferation",
    description:
      "Autonomous synthesis infrastructure carries profound ethical and security responsibilities. We implement hardware-enforced, pre-execution screening against international chemical weapons schedules, export control registries, and biological/chemical precursor restrictions.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              About Chemist3 Labs
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Bridging computational intelligence and physical chemical synthesis.
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              We exist to solve the physical bottleneck in advanced materials discovery. By combining
              quantum-grounded reaction modeling with automated flow chemistry, we empower sovereign
              and enterprise institutions to build critical material supply chains from first principles.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOUNDING THESIS (CONTENT-DRIVEN) ──────────────────────────── */}
      <section id="thesis" className="py-24 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Founding Thesis
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              The physical-digital asymmetry.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Over the last thirty years, digital computing progressed through orders of magnitude.
              Yet the discovery and synthesis of physical compounds—energetics, semiconductors,
              refractory ceramics, and life-saving pharmaceuticals—remains tethered to manual batch
              chemistry and brittle supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_THESIS.map((thesis) => (
              <div
                key={thesis.number}
                className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-4"
              >
                <div className="font-mono text-xs text-neutral-500 font-semibold">
                  THESIS {thesis.number}
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight">
                  {thesis.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {thesis.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORWARD DEPLOYED METHODOLOGY ──────────────────────────────── */}
      <section id="forward-deployed" className="py-24 border-b border-[#1F1F1F] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
                Methodology
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Forward Deployed Engineering.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                We do not sell software licenses from afar. We deploy our engineers directly into the
                laboratories and operational environments where synthesis decisions occur.
              </p>
              <div className="pt-2">
                <Link
                  href="/careers"
                  className="text-xs font-mono text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  View open Forward Deployed Engineering roles →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-3">
                <h4 className="text-base font-medium text-white">Direct Laboratory Immersion</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Engineers work on site with partner analytical equipment, reactor setups, and
                  existing synthesis workflows. This eliminates communication loss and surfaces edge
                  cases that never appear in sterile simulation benchmarks.
                </p>
              </div>

              <div className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-3">
                <h4 className="text-base font-medium text-white">Zero Abstraction Gap</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  There are no intermediaries between builders and operators. The engineer writing the
                  reaction coordinate algorithm is the person debugging pump telemetry in the lab.
                </p>
              </div>

              <div className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-3">
                <h4 className="text-base font-medium text-white">Continuous Operational Delivery</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Software updates, model calibrations, and control routines are pushed directly to
                  production runtimes under strict validation protocols, achieving immediate operational
                  leverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATING STANDARDS ───────────────────────────────────────── */}
      <section className="py-24 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Corporate Governance
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Institutional operating standards.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Non-negotiable principles that govern how we engineer systems, handle partner data,
              and execute our mission.
            </p>
          </div>

          <div className="divide-y divide-[#1F1F1F]">
            {OPERATING_STANDARDS.map((std, i) => (
              <div key={std.title} className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 font-mono text-xs text-neutral-500">
                  STANDARD 0{i + 1}
                </div>
                <div className="md:col-span-8 space-y-2">
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {std.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-[#222222] bg-[#0A0A0A] p-8 sm:p-12 max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Connect with Our Leadership & Engineering Desks
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              To discuss institutional partnership, collaborative research, or defense-grade
              deployment requirements, reach out directly to our inquiries desk.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TacticalButton href="/contact" variant="primary">
                Contact Inquiries Desk
              </TacticalButton>
              <TacticalButton href="/careers" variant="secondary">
                View Open Positions
              </TacticalButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
