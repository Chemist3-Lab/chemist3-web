import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllJobs, getJobBySlug } from "@/lib/content";
import { TacticalButton } from "@/components/ui/tactical-button";
import { JobSpecification } from "@/components/job-specification";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const jobs = getAllJobs();
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Position Not Found" };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.summary || `Join Chemist3 Labs as a ${job.title}.`,
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const applicationSubject = `[${job.title}] Application - [Your Name]`;
  const mailtoUrl = `mailto:${job.contactEmail}?subject=${encodeURIComponent(
    applicationSubject
  )}`;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/careers"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              ← Back to All Positions
            </Link>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
              {job.category} / {job.discipline}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              {job.title}
            </h1>

            {/* Metadata Badges */}
            <div className="pt-4 border-t border-[#1F1F1F] flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-neutral-600">Location:</span> {job.location}
              </div>
              <div>
                <span className="text-neutral-600">Type:</span> {job.type}
              </div>
              <div>
                <span className="text-neutral-600">Compensation:</span> {job.compensationBand}
              </div>
            </div>

            <div className="pt-4">
              <TacticalButton href={mailtoUrl} variant="primary" size="md">
                Apply for this Position →
              </TacticalButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── JOB SPECIFICATION BODY (CLEANLY PARSED MARKDOWN) ─────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <JobSpecification
            content={job.content}
            title={job.title}
            contactEmail={job.contactEmail}
          />
        </div>
      </section>
    </div>
  );
}
