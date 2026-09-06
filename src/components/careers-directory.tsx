"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { JobListing } from "@/lib/content";

interface CareersDirectoryProps {
  jobs: JobListing[];
}

export function CareersDirectory({ jobs }: CareersDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedBusinessArea, setSelectedBusinessArea] = useState<string>("all");

  // Extract unique business areas (categories)
  const businessAreas = useMemo(() => {
    return Array.from(new Set(jobs.map((j) => j.category))).sort();
  }, [jobs]);

  // Counts for types
  const fullTimeCount = useMemo(
    () => jobs.filter((j) => j.type.toLowerCase().includes("full-time")).length,
    [jobs]
  );
  const internshipCount = useMemo(
    () => jobs.filter((j) => j.type.toLowerCase().includes("internship")).length,
    [jobs]
  );

  // Real-time filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Type filter
      if (selectedType !== "all") {
        if (selectedType === "Full-Time" && !job.type.toLowerCase().includes("full-time")) {
          return false;
        }
        if (selectedType === "Internship" && !job.type.toLowerCase().includes("internship")) {
          return false;
        }
      }

      // Business Area filter
      if (selectedBusinessArea !== "all") {
        if (job.category !== selectedBusinessArea) {
          return false;
        }
      }

      // Real-time search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesSummary = job.summary.toLowerCase().includes(q);
        const matchesCategory = job.category.toLowerCase().includes(q);
        const matchesDiscipline = job.discipline.toLowerCase().includes(q);
        const matchesLocation = job.location.toLowerCase().includes(q);

        if (
          !matchesTitle &&
          !matchesSummary &&
          !matchesCategory &&
          !matchesDiscipline &&
          !matchesLocation
        ) {
          return false;
        }
      }

      return true;
    });
  }, [jobs, selectedType, selectedBusinessArea, searchQuery]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedType !== "all" || selectedBusinessArea !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedBusinessArea("all");
  };

  return (
    <div className="space-y-8">
      {/* ─── CONTROLS BAR (SEARCH, TYPE, BUSINESS AREA) ────────────────── */}
      <div className="border border-[#222222] bg-[#0A0A0A] p-6 space-y-6">
        {/* Real-time Search Input */}
        <div className="space-y-2">
          <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Search Open Roles
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title (e.g. Software Engineer, Internship, Deployment)..."
              className="w-full bg-[#050505] border border-[#262626] text-white px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-neutral-500 hover:text-white"
                aria-label="Clear Search"
              >
                CLEAR ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row: Types & Business Areas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[#1A1A1A] items-end">
          {/* Types: All, Full-Time, Internship */}
          <div className="md:col-span-7 space-y-2">
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Role Type
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedType("all")}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors ${
                  selectedType === "all"
                    ? "bg-white text-black border-white font-medium"
                    : "bg-[#050505] text-neutral-400 border-[#262626] hover:border-neutral-500 hover:text-white"
                }`}
              >
                All Types ({jobs.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("Full-Time")}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors ${
                  selectedType === "Full-Time"
                    ? "bg-white text-black border-white font-medium"
                    : "bg-[#050505] text-neutral-400 border-[#262626] hover:border-neutral-500 hover:text-white"
                }`}
              >
                Full-Time ({fullTimeCount})
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("Internship")}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors ${
                  selectedType === "Internship"
                    ? "bg-white text-black border-white font-medium"
                    : "bg-[#050505] text-neutral-400 border-[#262626] hover:border-neutral-500 hover:text-white"
                }`}
              >
                Internship ({internshipCount})
              </button>
            </div>
          </div>

          {/* Business Areas Dropdown */}
          <div className="md:col-span-5 space-y-2">
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Business Area
            </label>
            <select
              value={selectedBusinessArea}
              onChange={(e) => setSelectedBusinessArea(e.target.value)}
              className="w-full bg-[#050505] border border-[#262626] text-white px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-neutral-400 transition-colors"
            >
              <option value="all">All Business Areas ({jobs.length})</option>
              {businessAreas.map((area) => {
                const count = jobs.filter((j) => j.category === area).length;
                return (
                  <option key={area} value={area}>
                    {area} ({count})
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Live Filter Summary */}
        <div className="pt-4 border-t border-[#181818] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            Showing <span className="text-white font-medium">{filteredJobs.length}</span> of{" "}
            <span>{jobs.length}</span> positions
            {selectedType !== "all" && (
              <span className="text-neutral-400"> · Type: {selectedType}</span>
            )}
            {selectedBusinessArea !== "all" && (
              <span className="text-neutral-400"> · Area: {selectedBusinessArea}</span>
            )}
            {searchQuery.trim() !== "" && (
              <span className="text-neutral-400"> · Query: &quot;{searchQuery}&quot;</span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-neutral-400 hover:text-white underline underline-offset-4"
            >
              Reset All Filters ↺
            </button>
          )}
        </div>
      </div>

      {/* ─── EMPTY STATE ───────────────────────────────────────────────── */}
      {filteredJobs.length === 0 && (
        <div className="border border-[#222222] bg-[#0A0A0A] p-12 text-center space-y-4">
          <div className="text-sm font-mono text-neutral-300">
            No positions match your active filter criteria.
          </div>
          <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
            Try adjusting your search query, selecting &quot;All Types&quot;, or switching to another
            business area.
          </p>
          <div className="pt-2">
            <button
              onClick={resetFilters}
              className="px-4 py-2 border border-neutral-700 hover:border-white text-xs font-mono text-white transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

      {/* ─── ROLE LISTINGS ─────────────────────────────────────────────── */}
      {filteredJobs.length > 0 && (
        <div className="divide-y divide-[#1F1F1F] border border-[#222222] bg-[#0A0A0A]">
          {filteredJobs.map((job) => (
            <div
              key={job.slug}
              className="p-6 sm:p-8 hover:bg-[#0E0E0E] transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-3">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono">
                    <span
                      className={`border px-2 py-0.5 ${
                        job.type.toLowerCase().includes("internship")
                          ? "border-neutral-400 text-white bg-neutral-900"
                          : "border-neutral-800 text-neutral-400 bg-[#050505]"
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="border border-neutral-800 text-neutral-500 px-2 py-0.5 bg-[#050505]">
                      {job.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white tracking-tight">
                    <Link
                      href={`/careers/${job.slug}`}
                      className="hover:text-neutral-300 transition-colors"
                    >
                      {job.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl pt-1">
                    {job.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3 pt-2 lg:pt-0">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center px-4 py-2 text-xs font-mono text-neutral-200 border border-neutral-700 hover:border-neutral-300 hover:text-white transition-colors"
                  >
                    Inspect Role →
                  </Link>
                </div>
              </div>

              {/* Metadata Row (No random emojis) */}
              <div className="pt-4 border-t border-[#181818] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
                <div>
                  <span className="text-neutral-600">Location:</span> {job.location}
                </div>
                <div>
                  <span className="text-neutral-600">Discipline:</span> {job.discipline}
                </div>
                <div>
                  <span className="text-neutral-600">Compensation:</span> {job.compensationBand}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
