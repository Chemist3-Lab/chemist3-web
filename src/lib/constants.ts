export const SITE_CONFIG = {
  name: "Chemist3 Labs",
  legalName: "Chemist3 Labs Inc.",
  tagline: "Computational Systems & Materials Research",
  description:
    "Chemist3 Labs engineers computational systems and exploratory hardware integration pipelines for advanced chemistry and critical materials research.",
  contact: {
    email: "contact@chemist3.com",
    inquiriesDesk: "contact@chemist3.com",
    careers: "careers@chemist3.com",
    legal: "legal@chemist3.com",
    routingSubject: "Chemist3 Labs — Technical Briefing Inquiry",
  },
  navigation: [
    { label: "Projects", href: "/systems" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    sections: [
      {
        title: "Projects",
        links: [
          { label: "Project 1", href: "/systems#project-1" },
          { label: "Project 2", href: "/systems#project-2" },
          { label: "Project 3", href: "/systems#project-3" },
          { label: "Project 4", href: "/systems#project-4" },
        ],
      },
      {
        title: "Organization",
        links: [
          { label: "About Chemist3", href: "/about" },
          { label: "Operating Thesis", href: "/about#thesis" },
          { label: "Forward Deployed Model", href: "/about#forward-deployed" },
          { label: "Careers (19 Roles)", href: "/careers" },
        ],
      },
      {
        title: "Governance & Legal",
        links: [
          { label: "Enterprise Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
          { label: "Zero Secondary Training Covenant", href: "/legal/privacy#zero-training" },
          { label: "Data Tier Classification", href: "/legal/privacy#data-tiers" },
        ],
      },
      {
        title: "Direct Inquiries",
        links: [
          { label: "Request Technical Briefing", href: "/contact" },
          { label: "Executive Inquiries Desk", href: "mailto:contact@chemist3.com" },
          { label: "Security & Vulnerability Disclosure", href: "mailto:legal@chemist3.com" },
        ],
      },
    ],
  },
} as const;

export const PROJECTS = [
  {
    id: "project-1",
    code: "PRJ-01",
    title: "Project 1",
    subtitle: "Molecular Coordinate Simulation",
    category: "Exploratory Architecture",
    status: "In Development",
    overview:
      "Exploratory computational modeling pipeline investigating transition state barrier calculations and molecular coordinate representations. Currently in initial architecture and specification phase.",
    specifications: [
      { label: "Phase", value: "Architecture & Specification" },
      { label: "Focus Area", value: "Coordinate Representation" },
      { label: "Target Environment", value: "Exploratory Testbed" },
      { label: "Status", value: "Active Development" },
    ],
  },
  {
    id: "project-2",
    code: "PRJ-02",
    title: "Project 2",
    subtitle: "Reaction Pathway Search",
    category: "Algorithmic Exploration",
    status: "In Development",
    overview:
      "Heuristic tree search and graph traversal methodologies for exploring multi-step chemical transformation pathways and precursor availability mapping.",
    specifications: [
      { label: "Phase", value: "Algorithmic Design" },
      { label: "Focus Area", value: "Pathway Graph Search" },
      { label: "Target Environment", value: "Simulation Sandbox" },
      { label: "Status", value: "Active Development" },
    ],
  },
  {
    id: "project-3",
    code: "PRJ-03",
    title: "Project 3",
    subtitle: "Flow Reactor Telemetry & Interfacing",
    category: "Hardware Interfacing",
    status: "Scoping",
    overview:
      "Device communication protocol investigation and hardware abstraction layers for microfluidic laboratory reactors, pump controllers, and sensor telemetry capture.",
    specifications: [
      { label: "Phase", value: "Hardware Scoping" },
      { label: "Focus Area", value: "Reactor Bus Telemetry" },
      { label: "Target Environment", value: "Benchtop Staging" },
      { label: "Status", value: "Early Prototyping" },
    ],
  },
  {
    id: "project-4",
    code: "PRJ-04",
    title: "Project 4",
    subtitle: "Compliance & Verification Framework",
    category: "Policy Architecture",
    status: "In Development",
    overview:
      "Security boundary enforcement and regulatory verification protocols screening research inputs against chemical non-proliferation schedules in sovereign research environments.",
    specifications: [
      { label: "Phase", value: "Compliance Architecture" },
      { label: "Focus Area", value: "Policy Screening & Audit" },
      { label: "Target Environment", value: "Isolated Enclave" },
      { label: "Status", value: "Active Development" },
    ],
  },
] as const;

export const COMPANY_THESIS = [
  {
    number: "01",
    title: "The Physical Synthesis Bottleneck",
    content:
      "Over the past three decades, computational software capabilities evolved at unprecedented exponential rates, while the physical realization of advanced materials and chemical compounds remained largely artisanal, slow, and reliant on fragile foreign supply lines. Chemist3 Labs was formed to explore bridging computational methods and physical execution.",
  },
  {
    number: "02",
    title: "Forward Deployed Engineering",
    content:
      "We reject the separation between theoretical software development and real-world execution. Our engineers deploy directly into partner research centers, manufacturing facilities, and secure operational sites. We build side-by-side with domain practitioners, measuring our success by working software and field utility.",
  },
  {
    number: "03",
    title: "Sovereign Infrastructure & Trust",
    content:
      "Advanced materials research requires high-integrity environments. We maintain strict boundaries: client workloads, proprietary molecular structures, and research data are never ingested to train generalized public models or shared across commercial boundaries.",
  },
  {
    number: "04",
    title: "Engineering Grounding Over Speculation",
    content:
      "Every initiative we undertake is focused on verifiable engineering principles and physical feasibility. We avoid speculative demos or ungrounded generative interfaces, focusing on reproducible, well-tested computational and hardware methods.",
  },
] as const;
