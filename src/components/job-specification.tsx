import React from "react";
import { TacticalButton } from "@/components/ui/tactical-button";

interface JobSpecificationProps {
  content: string;
  title: string;
  contactEmail: string;
}

// Formats inline markdown: **bold**, `code`, and [links](url)
function renderFormattedText(text: string): React.ReactNode {
  // Regex to split by markdown patterns: links, bold, code
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g);

  return tokens.map((token, i) => {
    // Links: [label](url)
    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-neutral-200 underline underline-offset-4 hover:text-white"
        >
          {linkMatch[1]}
        </a>
      );
    }

    // Bold: **text**
    if (token.startsWith("**") && token.endsWith("**")) {
      const inner = token.slice(2, -2);
      return (
        <strong key={i} className="font-semibold text-white">
          {inner}
        </strong>
      );
    }

    // Code: `code`
    if (token.startsWith("`") && token.endsWith("`")) {
      const inner = token.slice(1, -1);
      return (
        <code
          key={i}
          className="font-mono text-xs text-neutral-200 bg-[#141414] border border-[#262626] px-1.5 py-0.5"
        >
          {inner}
        </code>
      );
    }

    return token;
  });
}

export function JobSpecification({
  content,
  title,
  contactEmail,
}: JobSpecificationProps) {
  // Strip frontmatter and primary # Title
  const cleanBody = content
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    .replace(/^#\s+[^\r\n]+\r?\n+/, "")
    .trim();

  // Split into sections by `### `
  const rawSections = cleanBody.split(/\r?\n(?=### )/);
  const sectionMap: Record<string, string> = {};

  for (const raw of rawSections) {
    const lines = raw.trim().split(/\r?\n/);
    const titleMatch = lines[0].match(/^###\s+(.*)/);
    if (!titleMatch) continue;
    const secTitle = titleMatch[1].trim();
    const secBody = lines.slice(1).join("\n").trim();
    sectionMap[secTitle] = secBody;
  }

  // 1. The Mission
  const missionParagraphs = (sectionMap["The Mission"] || "")
    .split(/\r?\n\r?\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  // 2. Core Responsibilities
  const responsibilities = (sectionMap["Core Responsibilities"] || "")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith("-"))
    .map((l) => l.replace(/^-\s*/, ""));

  // 3. What We Look For (Split into Technical Competencies & Mindset)
  const lookForText = sectionMap["What We Look For"] || "";
  const techCompetenciesMatch = lookForText.match(
    /\*\*Technical \/ Domain Competencies:\*\*([\s\S]*?)(?=\*\*Mindset & Attributes:\*\*|$)/
  );
  const mindsetMatch = lookForText.match(/\*\*Mindset & Attributes:\*\*([\s\S]*?)$/);

  const techCompetencies = techCompetenciesMatch
    ? techCompetenciesMatch[1]
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l.startsWith("-"))
        .map((l) => l.replace(/^-\s*/, ""))
    : [];

  const mindsetAttributes = mindsetMatch
    ? mindsetMatch[1]
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l.startsWith("-"))
        .map((l) => l.replace(/^-\s*/, ""))
    : [];

  // Fallback for What We Look For if not using standard headers
  const fallbackLookFor =
    techCompetencies.length === 0 && mindsetAttributes.length === 0
      ? lookForText
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l.startsWith("-"))
          .map((l) => l.replace(/^-\s*/, ""))
      : [];

  // 4. Operating Principles
  const principlesRaw = (sectionMap["Operating Principles"] || "")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith("-"));

  const principles = principlesRaw.map((line) => {
    const boldMatch = line.match(/^-\s*\*\*([^:]+):\*\*\s*(.*)$/);
    if (boldMatch) {
      return {
        title: boldMatch[1].trim(),
        description: boldMatch[2].trim(),
      };
    }
    return {
      title: "",
      description: line.replace(/^-\s*/, ""),
    };
  });

  // 5. How to Apply
  const applicationSubject = `[${title}] Application - [Your Name]`;
  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
    applicationSubject
  )}`;

  return (
    <div className="space-y-16">
      {/* ─── THE MISSION ──────────────────────────────────────────────── */}
      {missionParagraphs.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500 uppercase">01 /</span>
            <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              The Mission
            </h2>
          </div>
          <div className="space-y-4 pt-2">
            {missionParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl"
              >
                {renderFormattedText(para)}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ─── CORE RESPONSIBILITIES ────────────────────────────────────── */}
      {responsibilities.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1A1A1A] pb-3">
            <span className="font-mono text-xs text-neutral-500 uppercase">02 /</span>
            <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              Core Responsibilities
            </h2>
            <span className="text-xs font-mono text-neutral-500 ml-auto">
              {responsibilities.length} Directives
            </span>
          </div>

          <ul className="space-y-3.5">
            {responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed"
              >
                <span className="text-neutral-500 font-mono text-xs mt-1 shrink-0">
                  —
                </span>
                <span>{renderFormattedText(resp)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── WHAT WE LOOK FOR ─────────────────────────────────────────── */}
      {(techCompetencies.length > 0 ||
        mindsetAttributes.length > 0 ||
        fallbackLookFor.length > 0) && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1A1A1A] pb-3">
            <span className="font-mono text-xs text-neutral-500 uppercase">03 /</span>
            <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              What We Look For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCompetencies.length > 0 && (
              <div className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
                <h3 className="text-xs font-mono text-neutral-300 uppercase tracking-wider font-medium border-b border-[#1A1A1A] pb-3">
                  Technical & Domain Competencies
                </h3>
                <ul className="space-y-3">
                  {techCompetencies.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                    >
                      <span className="text-neutral-600 font-mono text-xs mt-0.5 shrink-0">
                        +
                      </span>
                      <span>{renderFormattedText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {mindsetAttributes.length > 0 && (
              <div className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
                <h3 className="text-xs font-mono text-neutral-300 uppercase tracking-wider font-medium border-b border-[#1A1A1A] pb-3">
                  Mindset & Operational Attributes
                </h3>
                <ul className="space-y-3">
                  {mindsetAttributes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                    >
                      <span className="text-neutral-600 font-mono text-xs mt-0.5 shrink-0">
                        +
                      </span>
                      <span>{renderFormattedText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {fallbackLookFor.length > 0 && (
              <div className="md:col-span-2 border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
                <ul className="space-y-3">
                  {fallbackLookFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                    >
                      <span className="text-neutral-600 font-mono text-xs mt-0.5 shrink-0">
                        +
                      </span>
                      <span>{renderFormattedText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── OPERATING PRINCIPLES ─────────────────────────────────────── */}
      {principles.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1A1A1A] pb-3">
            <span className="font-mono text-xs text-neutral-500 uppercase">04 /</span>
            <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {principles.map((pr, i) => (
              <div
                key={i}
                className="border border-[#222222] bg-[#0A0A0A] p-5 sm:p-6 space-y-1.5"
              >
                {pr.title && (
                  <h3 className="text-sm sm:text-base font-medium text-white tracking-tight">
                    {pr.title}
                  </h3>
                )}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {renderFormattedText(pr.description)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── HOW TO APPLY ─────────────────────────────────────────────── */}
      <section className="border border-[#222222] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="space-y-2">
          <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            05 / Direct Application Protocol
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
            Apply for {title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Submit your resume, GitHub profile, system architecture portfolios, or technical
            summaries directly to our engineering hiring desk. We prioritize demonstrated capability
            and intensity of ownership.
          </p>
        </div>

        <div className="border-t border-[#1A1A1A] pt-4 space-y-3 font-mono text-xs">
          <div className="text-neutral-400">
            <span className="text-neutral-600 uppercase">Destination:</span>{" "}
            <a
              href={mailtoUrl}
              className="text-white hover:underline underline-offset-4"
            >
              {contactEmail}
            </a>
          </div>
          <div className="text-neutral-400">
            <span className="text-neutral-600 uppercase">Formatted Subject:</span>{" "}
            <code className="text-neutral-200 bg-[#121212] border border-[#222222] px-2 py-1 block sm:inline-block mt-1 sm:mt-0 font-mono text-xs">
              {applicationSubject}
            </code>
          </div>
        </div>

        <div className="pt-2">
          <TacticalButton href={mailtoUrl} variant="primary" size="md">
            Transmit Application Dossier →
          </TacticalButton>
        </div>
      </section>
    </div>
  );
}
