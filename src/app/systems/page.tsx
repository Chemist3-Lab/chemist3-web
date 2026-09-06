import type { Metadata } from "next";
import Link from "next/link";
import { TacticalButton } from "@/components/ui/tactical-button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Technical overview of active engineering projects and research tracks at Chemist3 Labs.",
};

const PROJECT_TRACKS = [
  {
    id: "project-1",
    title: "Project 1: Molecular Coordinate Representation",
    code: "PRJ-01",
    phase: "Architecture & Specification",
    category: "Computational Modeling",
    overview:
      "Investigation into geometric deep learning representations for 3D molecular conformations and transition state coordinates. The objective is to evaluate whether message-passing architectures can approximate quantum mechanical reaction barriers with sufficient fidelity for synthetic screening.",
    objectives: [
      "Benchmarking SE(3)-equivariant graph models against semi-empirical quantum calculations",
      "Evaluating conformer ensemble generation in constrained solvent environments",
      "Analyzing electronic density approximation accuracy across novel chemical structures",
      "Documenting performance trade-offs between heuristic search and numerical optimization",
    ],
  },
  {
    id: "project-2",
    title: "Project 2: Reaction Pathway Search & Graph Traversal",
    code: "PRJ-02",
    phase: "Algorithmic Design",
    category: "Algorithmic Synthesis",
    overview:
      "Exploratory graph search algorithms focused on multi-step retrosynthetic pathway generation. Explores heuristic pruning strategies to identify viable precursor routes grounded in verified domestic chemical catalogs.",
    objectives: [
      "Designing Monte Carlo tree search heuristics tailored for large-scale reaction graph traversal",
      "Integrating domestic commercial supplier availability rules into synthetic cost functions",
      "Exploring protection group compatibility matrices in multi-step transformations",
      "Prototyping automated byproduct hazard and purification difficulty estimates",
    ],
  },
  {
    id: "project-3",
    title: "Project 3: Flow Reactor Telemetry & Interfacing",
    code: "PRJ-03",
    phase: "Hardware Scoping",
    category: "Hardware Interfacing",
    overview:
      "Device communication protocol investigation for physical laboratory instrumentation. Prototyping software abstraction layers that can interface with automated microfluidic continuous-flow reactors, syringe drives, and in-line spectrophotometry.",
    objectives: [
      "Evaluating real-time communication protocols (CAN, gRPC, serial) for pump and valve control",
      "Specifying hardware safety interlocks for emergency thermal and pressure aborts",
      "Investigating automated closed-loop parameter tuning based on sensor telemetry",
      "Drafting driver interface specifications for modular laboratory hardware components",
    ],
  },
  {
    id: "project-4",
    title: "Project 4: Compliance & Verification Framework",
    code: "PRJ-04",
    phase: "Compliance Architecture",
    category: "Policy & Governance",
    overview:
      "Architectural design for sovereign research isolation and regulatory screening. Focuses on pre-execution validation against Chemical Weapons Convention schedules and export control frameworks.",
    objectives: [
      "Designing sub-millisecond screening algorithms against international controlled substance lists",
      "Architecting cryptographic tenant boundary layers ensuring zero data pooling or secondary training",
      "Prototyping tamper-evident provenance logs for synthesized research materials",
      "Establishing sovereign data residency deployment patterns for air-gapped partner enclaves",
    ],
  },
];

export default function SystemsPage() {
  return (
    <div className="bg-black text-white">
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Engineering & Projects
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Projects & Engineering Architecture
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Chemist3 Labs pursues focused engineering projects bridging computational modeling,
              graph search algorithms, and laboratory hardware integration. Below is an overview
              of our active research tracks and development roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ACTIVE PROJECTS BREAKDOWN ─────────────────────────────────── */}
      <section className="py-24 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Development Roadmaps
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Active engineering tracks.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Each project addresses a specific technical hurdle in the computational chemistry and
              physical execution pipeline.
            </p>
          </div>

          <div className="space-y-8">
            {PROJECT_TRACKS.map((track) => (
              <div
                key={track.id}
                id={track.id}
                className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#1A1A1A] text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">{track.code}</span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-neutral-400">{track.category}</span>
                  </div>
                  <span className="text-neutral-400 border border-neutral-800 px-2 py-0.5">
                    Phase: {track.phase}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-4">
                  {track.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-4xl">
                  {track.overview}
                </p>

                <div className="border-t border-[#1A1A1A] pt-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                    Current Research Objectives
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-neutral-400">
                    {track.objectives.map((obj) => (
                      <li key={obj} className="flex items-start gap-2">
                        <span className="text-neutral-600">—</span>
                        <span>{obj}</span>
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
