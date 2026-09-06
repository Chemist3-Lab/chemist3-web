import Link from "next/link";
import type { LegalDocument } from "@/lib/content";

interface LegalViewerProps {
  document: LegalDocument;
}

export function LegalViewer({ document }: LegalViewerProps) {
  // Extract h2 sections for a table of contents
  const sections = document.content
    .split(/\n(?=## )/)
    .filter((sec) => sec.trim().startsWith("## "))
    .map((sec) => {
      const titleMatch = sec.match(/^## (.*)/);
      const title = titleMatch ? titleMatch[1].trim() : "";
      const body = sec.replace(/^## .*\n/, "").trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return { id, title, body };
    });

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Document Header */}
      <section className="pt-32 pb-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <span>{document.category}</span>
              <span className="text-neutral-700">|</span>
              <span>Version {document.version}</span>
              {document.documentId && (
                <>
                  <span className="text-neutral-700">|</span>
                  <span className="text-neutral-300">ID: {document.documentId}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              {document.title}
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
              {document.description}
            </p>

            <div className="pt-4 border-t border-[#1F1F1F] flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-500">
              <div>
                <span className="text-neutral-600">Effective Date:</span> {document.effectiveDate}
              </div>
              <div>
                <span className="text-neutral-600">Last Updated:</span> {document.lastUpdated}
              </div>
              <div>
                <span className="text-neutral-600">Official Desk:</span>{" "}
                <a
                  href={`mailto:${document.contact}`}
                  className="text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  {document.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Table of Contents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Table of Contents Sidebar */}
            <aside className="lg:col-span-4 sticky top-24 hidden lg:block border border-[#222222] bg-[#0A0A0A] p-6 space-y-3">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider pb-2 border-b border-[#1A1A1A]">
                Document Sections
              </div>
              <nav className="space-y-1 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-neutral-400 hover:text-white py-1 transition-colors leading-relaxed"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
              <div className="pt-4 border-t border-[#1A1A1A]">
                <Link
                  href="/contact"
                  className="text-[11px] font-mono text-neutral-400 hover:text-white underline underline-offset-4 block"
                >
                  Questions? Contact Legal Desk →
                </Link>
              </div>
            </aside>

            {/* Document Body */}
            <main className="lg:col-span-8 space-y-12 max-w-3xl">
              {sections.map((sec) => {
                const isZeroTraining = sec.title.toLowerCase().includes("zero secondary training");
                const isDataTiers = sec.title.toLowerCase().includes("information collection");

                return (
                  <div key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                    {isZeroTraining && <span id="zero-training" className="block -mt-24 pt-24" />}
                    {isDataTiers && <span id="data-tiers" className="block -mt-24 pt-24" />}
                    <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight border-b border-[#1F1F1F] pb-3">
                      {sec.title}
                    </h2>
                    <div className="text-sm text-neutral-300 leading-relaxed space-y-4 whitespace-pre-line font-sans">
                      {sec.body}
                    </div>
                  </div>
                );
              })}

              <div className="border border-[#222222] bg-[#0A0A0A] p-6 space-y-2 mt-12 text-xs font-mono text-neutral-400">
                <div className="text-white font-medium">Compliance Covenants & Enforcement</div>
                <p>
                  Official correspondence concerning this legal document should be directed to{" "}
                  <a
                    href={`mailto:${document.contact}`}
                    className="text-white underline underline-offset-4"
                  >
                    {document.contact}
                  </a>
                  .
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
