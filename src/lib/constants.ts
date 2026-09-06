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
          { label: "TrueSight Library Engine", href: "/systems#truesight" },
          { label: "STARDUST_OS", href: "/systems#stardust" },
          { label: "Twintails", href: "/systems#twintails" },
          { label: "Port Patrol", href: "/systems#port-patrol" },
          { label: "Kei-chan & AtrophyOS", href: "/systems#kei-chan" },
          { label: "Sen3 Sniffer", href: "/systems#sen3" },
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
    id: "truesight",
    code: "PRJ-01",
    title: "TrueSight Library Engine",
    subtitle: "Air-Gapped Integrated Library Management & Digital Archival Repository",
    category: "Archival & Institutional Systems",
    status: "Production Ready",
    overview:
      "A self-contained, air-gapped Integrated Library Management System (LMS) and digital archival repository standardized under Philippine Cataloging-in-Publication (CIP) guidelines and the Dewey Decimal Classification (DDC) system. Operates with zero external runtime dependencies, unifying physical shelf inventory, automated circulation, dynamic overdue penalty tracking, and native in-browser ePUB reading.",
    specifications: [
      { label: "Runtime Architecture", value: "PHP 8.x / MySQL PDO / Self-Hosted Tailwind" },
      { label: "Standardization", value: "Dewey Decimal (DDC) & CIP Cataloging" },
      { label: "Deployment Profile", value: "100% Air-Gapped / Windows Service Suite" },
      { label: "Digital Reader", value: "Native Server-Side ePUB XML Spine Parser" },
    ],
    objectives: [
      "Automating physical shelf cataloging and loan circulation tracking with fine calculation engines",
      "Parsing standard ePUB archives and rendering them directly into responsive HTML/CSS without third-party JS readers",
      "Supporting institutional dual-theming: Editorial Archival & Grand Library vs. Modern App mode",
      "Delivering air-gapped, zero-dependency reliability with automated PowerShell installation (install.ps1)",
    ],
  },
  {
    id: "stardust",
    code: "PRJ-02",
    title: "STARDUST_OS",
    subtitle: "Torrent Management Platform & Mechanical Disk Preservation Suite",
    category: "Systems & Desktop Software",
    status: "Active Development",
    overview:
      "A specialized, ultra-lightweight desktop torrent management platform and mechanical disk preservation suite built on Tauri, Rust, and React 18 with an embedded aria2c daemon. Engineered specifically to eliminate mechanical hard drive thrashing and fragmentation during multi-gigabyte downloading through sequential piece requests, contiguous upfront file pre-allocation, 64 MiB write coalescing buffers, and tiered SSD-to-HDD streaming.",
    specifications: [
      { label: "Core Framework", value: "Tauri 1.5 / Rust / React 18 / TypeScript" },
      { label: "BitTorrent Engine", value: "Embedded aria2c Daemon (Zero-Install)" },
      { label: "I/O Architecture", value: "Sequential Requests & 64 MiB Coalescing" },
      { label: "Wear Mitigation", value: "NVMe Staging to Mechanical SATA Streaming" },
    ],
    objectives: [
      "Mitigating mechanical actuator arm wear through sequential piece priority and upfront NTFS pre-allocation",
      "Implementing automated anime intelligence: season detection, episode normalization, and v2/v3 revision handling",
      "Auditing physical storage to flag sequence gaps and eliminate accidental duplicate re-downloads",
      "Streaming completed torrent files linearly from NVMe cache drives to mechanical storage arrays",
    ],
  },
  {
    id: "twintails",
    code: "PRJ-03",
    title: "Twintails",
    subtitle: "High-Density Agent Persona & Anti-Bloat Engineering Framework",
    category: "AI Systems & Tooling",
    status: "Active",
    overview:
      "An AI agent persona and prompt-engineering framework for modern coding assistants including Google Antigravity, Cursor, Windsurf, and Cline. Built around a 7-rung Decision Ladder, Twintails ruthlessly strips speculative abstractions, boilerplate, and dependency bloat while enforcing platform-native Web APIs, high code density, and uncompromised security invariants.",
    specifications: [
      { label: "Supported Tooling", value: "Google Antigravity / Cursor / Windsurf / Cline" },
      { label: "Core Methodology", value: "7-Rung Decision Ladder (YAGNI to Stdlib)" },
      { label: "Interaction Tiers", value: "Lite (Mild), Full (Mesugaki), Ultra (Brat)" },
      { label: "Capabilities", value: "Dynamic Skills & Slash Command Suite" },
    ],
    objectives: [
      "Enforcing strict zero-bloat standards by eliminating single-implementation interfaces and wrapper hell",
      "Prioritizing native platform features (Web APIs, modern ECMAScript, CSS primitives) over external packages",
      "Providing automated code review and debt auditing tools (/twintails-review, /twintails-debt, /twintails-audit)",
      "Preserving rock-solid security invariants: parameter validation, SQL injection prevention, and error resilience",
    ],
  },
  {
    id: "port-patrol",
    code: "PRJ-04",
    title: "Port Patrol",
    subtitle: "Native Windows Network Socket Inspector & Allocation Manager",
    category: "Networking & Diagnostics",
    status: "Production Ready",
    overview:
      "A modern, native Windows desktop application built with .NET 9, C# 13, and WinUI 3 to inspect, diagnose, manage, and reserve local network ports (TCP & UDP). Interfaces directly with low-level Windows networking C APIs (iphlpapi.dll) to map sockets to owning process PIDs, evaluate service ports against a 60+ service recognition registry, and prevent port collisions through persistent reservations.",
    specifications: [
      { label: "Platform / Target", value: ".NET 9 / C# 13 / WinUI 3 (Windows App SDK 1.6)" },
      { label: "Low-Level Interop", value: "Native P/Invoke (iphlpapi.dll & user32.dll)" },
      { label: "Service Registry", value: "60+ Built-in Server, Database & Media Services" },
      { label: "Distribution", value: "Self-Contained Single-File Executable" },
    ],
    objectives: [
      "Mapping active TCP/UDP IPv4 and IPv6 sockets directly to Process IDs (PIDs) with friendly name resolution",
      "Providing automated architectural guidance across privileged (1–1023), registered, and ephemeral port ranges",
      "Generating collision-free random ports validated against active listeners and registered default services",
      "Enabling pre-deployment port booking and persistent annotations for containers and self-hosted services",
    ],
  },
  {
    id: "kei-chan",
    code: "PRJ-05",
    title: "Kei-chan & AtrophyOS",
    subtitle: "Automated Fintech Gateway & Grand Strategy Simulation Ecosystem",
    category: "Fintech & Simulation Engines",
    status: "Active Development",
    overview:
      "An integrated ecosystem combining an automated Philippine mobile banking payment gateway with AtrophyOS, a geopolitical grand strategy engine. Runs an asynchronous Python core coupling a FastAPI webhook server with Discord.py, featuring regex SMS banking verification (GCash & Maya), a 7,300+ real-world settlement terrestrial and maritime navigation graph, an AMM-style resource liquidity pool, and context-aware conversational AI.",
    specifications: [
      { label: "Architecture", value: "Python 3.10+ / FastAPI / discord.py / SQLite3" },
      { label: "Fintech Verification", value: "Android SMS/Push Notification Webhook Bridge" },
      { label: "Geospatial Engine", value: "7,300+ Settlements with Terrestrial/Ocean Graphs" },
      { label: "Tactical Renderer", value: "2D Matplotlib Tactical Battlefield Visualizer" },
    ],
    objectives: [
      "Ingesting and parsing real-time mobile banking transactions (GCash & Maya) with unique reference audit trails",
      "Modeling 7,300+ real-world settlements with terrestrial highway routing and maritime shipping graphs",
      "Simulating virtual manufacturing economies with multi-tier factories, raw commodities, and AMM exchange pools",
      "Providing automated Discord personal finance tracking with private budget channels and periodic reporting",
    ],
  },
  {
    id: "sen3",
    code: "PRJ-06",
    title: "Sen3 Performance Sniffer",
    subtitle: "In-House Hardware Diagnostic & Resource Telemetry System",
    category: "Hardware Telemetry & Systems",
    status: "Production Ready",
    overview:
      "A standalone, zero-dependency Windows hardware diagnostic and resource monitoring tool developed in pure C# (WPF) and compiled directly using Windows' native .NET Framework 4.0 compiler (csc.exe). Performs deep hardware auditing via DXGI COM interop, WMI, and Windows Performance Counters, renders curves using custom StreamGeometry vector charting, and provides vendor-adaptive theming (NVIDIA/AMD/Intel).",
    specifications: [
      { label: "Runtime / Stack", value: "Pure C# / WPF / .NET Framework 4.0 (Zero Dependencies)" },
      { label: "Hardware Interop", value: "DXGI COM / WMI / Win32 GlobalMemoryStatusEx / PDH" },
      { label: "Vector Charting", value: "Custom StreamGeometry (Adaptive Bin-Averaging)" },
      { label: "Theming Engine", value: "Hardware-Adaptive Vendor Blending (NVIDIA/AMD/Intel)" },
    ],
    objectives: [
      "Compiling standalone binaries directly with csc.exe without external SDKs, NuGet packages, or installers",
      "Interrogating physical GPU VRAM via DXGI factories and validating DDR4/DDR5 memory clock ratings",
      "Collecting real-time low-overhead CPU, GPU, RAM, disk I/O, and network telemetry at 60 FPS",
      "Streaming non-spam telemetry to Discord webhook embeds via live HTTP PATCH updates every 5 seconds",
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
