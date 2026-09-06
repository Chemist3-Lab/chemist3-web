import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F1F1F] bg-black text-neutral-400">
      {/* Directory Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Thesis / Col 1 */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <Link href="/" className="inline-block text-sm font-semibold tracking-tight text-white">
              Chemist3 Labs
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Chemist3 Labs develops computational chemistry engines and automated hardware
              orchestration platforms for the rapid discovery, verification, and sovereign
              synthesis of critical materials.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-500">
              Official Desk:{" "}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-neutral-300 hover:text-white underline underline-offset-4"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>

          {/* Directory Columns */}
          {SITE_CONFIG.footer.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-mono font-medium tracking-wider text-neutral-200 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal & Identity Bar */}
      <div className="border-t border-[#181818]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
            <div>
              © {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/legal/privacy" className="hover:text-neutral-300 transition-colors">
                Privacy Notice
              </Link>
              <Link href="/legal/terms" className="hover:text-neutral-300 transition-colors">
                Terms of Service
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:text-neutral-300 transition-colors"
              >
                Inquiries Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
