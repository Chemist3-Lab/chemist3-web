# Chemist3 Labs

[![Deployment Status](https://img.shields.io/badge/deployment-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://chemist3.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)


---

##  Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
* **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Typography:** [Geist](https://vercel.com/font) & [Geist Mono](https://vercel.com/font)
* **Hosting / CI:** [Netlify](https://www.netlify.com/) (Zero-cold-start Edge Deployment via `@netlify/plugin-nextjs`)

---

## Repository Structure

```
chemist3-web/
├── content/
│   ├── jobs/                 # Structured MDX specifications for active roles
│   │   ├── business-operations/
│   │   ├── engineering/
│   │   ├── field-operations/
│   │   ├── product-development/
│   │   └── reliability-operations/
│   └── legal/                # Enterprise compliance, privacy covenant & terms
├── public/                   # Static assets (C3 brandmark & favicon)
├── src/
│   ├── app/                  # App router pages, layouts & dynamic routes
│   │   ├── about/            # Operational thesis & forward deployed model
│   │   ├── careers/          # Filterable job directory & [slug] specifications
│   │   ├── contact/          # Technical briefing intake interface
│   │   ├── legal/            # Interactive compliance document viewer
│   │   ├── systems/          # Engineering tracks & active project specs
│   │   └── layout.tsx        # Root shell, metadata & typography providers
│   ├── components/           # Reusable tactical UI components & directory filters
│   └── lib/                  # Static constants & MDX filesystem parsers
├── .env.example              # Anonymized environment variable template
├── netlify.toml              # Netlify build configuration & HTTP security headers
└── README.md
```

---

## Local Development

### Prerequisites
* Node.js 20.x or 22.x LTS
* npm, pnpm, or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/Chemist3-Lab/chemist3-web.git
cd chemist3-web

# 2. Install dependencies
npm install

# 3. Initialize local environment
cp .env.example .env.local

# 4. Start development server
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Production Build Verification
```bash
# Lint code quality
npm run lint

# Compile static & dynamic production artifact
npm run build
```

---

## Security & Disclosure Covenant

Chemist3 Labs maintains a zero-tolerance policy regarding hardcoded secrets and unvetted client exposures.

* **Zero Secondary Training:** Client workloads, proprietary molecular structures, and research data are never ingested for public model training.
* **Vulnerability Disclosure:** If you identify a potential security issue, please notify our legal and security operations desk directly at [`legal@chemist3.com`](mailto:legal@chemist3.com). Do not open public issues detailing reproducible exploits.

---

## Official Desks & Contact Routing

* **Technical Briefings & Partnerships:** [`contact@chemist3.com`](mailto:contact@chemist3.com)
* **Talent & Careers Desk:** [`careers@chemist3.com`](mailto:careers@chemist3.com)
* **Legal & Information Security:** [`legal@chemist3.com`](mailto:legal@chemist3.com)

---

## License

Distributed under the [MIT License](LICENSE). Copyright © 2026 Chemist3 Labs Inc.
