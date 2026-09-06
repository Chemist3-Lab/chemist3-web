import fs from "fs";
import path from "path";

export interface JobListing {
  slug: string;
  title: string;
  category: string;
  discipline: string;
  location: string;
  type: string;
  compensationBand: string;
  contactEmail: string;
  content: string;
  summary: string;
}

export interface LegalDocument {
  title: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  category: string;
  status: string;
  contact: string;
  documentId?: string;
  content: string;
}

function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const rawYaml = match[1];
  const bodyContent = match[2];
  const data: Record<string, string> = {};

  rawYaml.split(/\r?\n/).forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, content: bodyContent };
}

export function getAllJobs(): JobListing[] {
  const jobsDirectory = path.join(process.cwd(), "content", "jobs");
  if (!fs.existsSync(jobsDirectory)) {
    return [];
  }

  const jobs: JobListing[] = [];

  function scanDirectory(currentPath: string) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data, content } = parseFrontmatter(fileContent);
        const slug = entry.name.replace(/\.mdx$/, "");

        // Extract a brief summary from "### The Mission" or first paragraph
        let summary = "";
        const missionMatch = content.match(/### The Mission\r?\n\r?\n([\s\S]*?)(?=\r?\n###|\r?\n---|$)/);
        if (missionMatch) {
          summary = missionMatch[1].trim().split(/\r?\n\r?\n/)[0];
        } else {
          const firstPara = content.split(/\r?\n\r?\n/).find((p) => p.trim() && !p.startsWith("#"));
          summary = firstPara ? firstPara.trim() : "";
        }

        jobs.push({
          slug,
          title: data.title || slug,
          category: data.category || "General",
          discipline: data.discipline || "General",
          location: data.location || "Remote",
          type: data.type || "Full-Time",
          compensationBand: data.compensationBand || "Competitive",
          contactEmail: data.contactEmail || "careers@chemist3.com",
          content,
          summary,
        });
      }
    }
  }

  scanDirectory(jobsDirectory);
  return jobs.sort((a, b) => a.title.localeCompare(b.title));
}

export function getJobBySlug(slug: string): JobListing | undefined {
  const jobs = getAllJobs();
  return jobs.find((job) => job.slug === slug);
}

export function getLegalDocument(name: "privacy" | "terms"): LegalDocument | null {
  const filePath = path.join(process.cwd(), "content", "legal", `${name}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(fileContent);

  const docIdMatch = content.match(/\*\*Document Identifier:\*\*\s*([^\r\n]+)/);

  return {
    title: data.title || (name === "privacy" ? "Privacy Policy" : "Terms of Service"),
    description: data.description || "",
    lastUpdated: data.lastUpdated || "September 2026",
    effectiveDate: data.effectiveDate || "September 2026",
    version: data.version || "1.0.0",
    category: data.category || "Legal & Compliance",
    status: data.status || "Active",
    contact: data.contact || "legal@chemist3.com",
    documentId: docIdMatch ? docIdMatch[1].trim() : undefined,
    content,
  };
}
