import type { Metadata } from "next";
import { getAllJobs } from "@/lib/content";
import { CareersDirectory } from "@/components/careers-directory";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open engineering, field operations, and systems architecture roles at Chemist3 Labs. Opportunities across Full-Time and 2027 Internships.",
};

const CULTURE_PILLARS = [
  {
    title: "Extreme Subsystem Ownership",
    description:
      "You own your systems from mathematical conception through physical hardware deployment. There are no handoff queues or product managers writing requirements in isolation. If a service or reactor control driver faults in the field, you own the response and the permanent architectural resolution.",
  },
  {
    title: "Direct Operator Proximity",
    description:
      "Engineers sit directly with the chemical scientists and defense operators who execute synthesis workloads. You will observe their challenges in real time, turning operational friction into algorithmic and mechanical leverage.",
  },
  {
    title: "First-Principles Technical Depth",
    description:
      "We value engineers who understand their domain from foundational physical and computer science primitives—from GPU memory hierarchies and concurrent network protocols to reaction kinetics and quantum mechanical barrier approximations.",
  },
  {
    title: "High Velocity with Zero Compromise on Verification",
    description:
      "We ship working software and control logic rapidly, but with mathematical and empirical rigor. In chemistry and critical materials, an untested edge case has physical consequences. Rigorous testing is our primary velocity multiplier.",
  },
];

export default function CareersPage() {
  const jobs = getAllJobs();

  return (
    <div className="bg-black text-white">
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Careers at Chemist3 Labs
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Engineering the foundation of autonomous chemical synthesis.
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              We are seeking engineers, physical scientists, and operations leaders who thrive on
              solving high-consequence physical problems. Opportunities span Full-Time positions and
              2027 Internships across software engineering and forward deployed operations.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span>{jobs.length} Active Positions</span>
              <span className="text-neutral-700">|</span>
              <span>Full-Time & 2027 Internships</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CULTURE & OPERATING STANDARDS ─────────────────────────────── */}
      <section className="py-24 border-b border-[#1F1F1F] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Operating Culture
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              How we work.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              We maintain small, sovereign engineering teams with direct authority to ship. Our
              culture is defined by technical rigor, intellectual honesty, and commitment to the
              mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CULTURE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-3"
              >
                <h3 className="text-lg font-medium text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS DIRECTORY WITH REAL-TIME FILTERING ─────────── */}
      <section className="py-24 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="font-mono text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Position Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Explore open positions.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Filter by role type (Full-Time or Internship), browse specific business areas, or
              search by title and keywords in real time.
            </p>
          </div>

          <CareersDirectory jobs={jobs} />
        </div>
      </section>

      {/* ─── GENERAL APPLICATION DESK ─────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-[#222222] bg-[#0A0A0A] p-8 sm:p-12 max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              General Applications & Early Inquiries
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              If your background spans chemistry, distributed systems, robotics, or microfluidics
              and you do not see an exact match listed above, send your CV, open-source repositories,
              or technical publications directly to our engineering desk:
            </p>
            <div className="font-mono text-xs text-neutral-300">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
                  "[General Application] Engineering / Research — [Your Name]"
                )}`}
                className="underline underline-offset-4 hover:text-white"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
