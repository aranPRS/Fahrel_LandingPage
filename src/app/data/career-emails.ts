export type MailFolderId = 'all' | 'mss' | 'eien_one' | 'highlights';

export interface CareerEmail {
  id: string;
  folder: 'eien_one' | 'mss';
  subject: string;
  company: string;
  role: string;
  period: string;
  category: string;
  summary: string;
  scope: string[];
  tags: string[];
  important: boolean;
}

export interface MailFolderMeta {
  id: MailFolderId;
  label: string;
  heading: string;
}

export const MAIL_FOLDERS: MailFolderMeta[] = [
  {
    id: 'all',
    label: 'All Work (17)',
    heading: 'All deliverables · 17 items',
  },
  {
    id: 'mss',
    label: 'Mitra Seribu Saudara (6)',
    heading: 'PT. Mitra Seribu Saudara · 6 items',
  },
  {
    id: 'eien_one',
    label: 'eien_one (11)',
    heading: 'eien_one · 11 items',
  },
  {
    id: 'highlights',
    label: 'Key Highlights (3)',
    heading: 'Flagged milestones · 3 items',
  },
];

export const CAREER_EMAILS: CareerEmail[] = [
  {
    id: 'mss-13',
    folder: 'mss',
    subject: 'Stock keeping unit (SKU) management portal',
    company: 'PT. Mitra Seribu Saudara',
    role: 'Front-End MAUI .NET Developer',
    period: '2026 – Ongoing',
    category: 'Enterprise Inventory',
    summary:
      'Designed and built the warehouse SKU administration portal from scratch so operations staff can catalog, search, and maintain product SKUs cleanly.',
    scope: [
      'Engineered responsive CRUD workflows and reusable C# UI components in .NET MAUI.',
      'Integrated RESTful backend APIs with clear validation for non-standard warehouse SKUs.',
      'Collaborated in Agile Scrum sprints alongside backend engineers and Figma design reviews.',
    ],
    tags: ['.NET MAUI', 'C#', 'REST API', 'Inventory'],
    important: false,
  },
  {
    id: 'mss-15',
    folder: 'mss',
    subject: '1000 Saudara building-material marketplace',
    company: 'PT. Mitra Seribu Saudara',
    role: 'Front-End MAUI .NET Developer',
    period: '2026 – Ongoing',
    category: 'Commerce Platform',
    summary:
      'Built the customer-facing marketplace experience for a building materials distributor, shifting manual phone ordering into a structured digital storefront.',
    scope: [
      'Implemented catalog browsing, product specs, and order flows tailored to B2B/retail buyers.',
      'Aligned frontend state and API contracts with warehouse inventory data.',
      'Focused on clear UX for heavy catalogs with high SKU variety.',
    ],
    tags: ['Marketplace', 'E-Commerce', 'Mobile & Web'],
    important: true,
  },
  {
    id: 'mss-17',
    folder: 'mss',
    subject: 'Published iOS and Android production apps',
    company: 'PT. Mitra Seribu Saudara',
    role: 'Front-End MAUI .NET Developer',
    period: '2026 – Ongoing',
    category: 'Mobile Release',
    summary:
      'Handled end-to-end release preparation, packaging, store compliance, and deployment for production applications on both Apple App Store and Google Play.',
    scope: [
      'Managed signing certificates, build pipelines, store metadata, and review compliance.',
      'Optimized ScanWin mobile app performance and reduced packaged bundle size.',
      'Coordinated QA fixes across device sizes prior to production rollout.',
    ],
    tags: ['iOS', 'Android', 'App Store', 'Google Play'],
    important: true,
  },
  {
    id: 'mss-12',
    folder: 'mss',
    subject: 'Recovered GRC Dream app after Google platform update',
    company: 'PT. Mitra Seribu Saudara',
    role: 'Front-End MAUI .NET Developer',
    period: '2026',
    category: 'Maintenance & Recovery',
    summary:
      'Diagnosed and resolved breaking compatibility issues in the GRC Dream mobile application following upstream Google platform and policy updates.',
    scope: [
      'Audited deprecated SDK calls, target API level requirements, and broken dependencies.',
      'Patched platform integrations and verified stability across updated Android devices.',
    ],
    tags: ['Android', 'Bug Fix', 'SDK Migration'],
    important: false,
  },
  {
    id: 'mss-14',
    folder: 'mss',
    subject: 'Frontend AI template & code-quality workflow',
    company: 'PT. Mitra Seribu Saudara',
    role: 'Front-End MAUI .NET Developer',
    period: '2026',
    category: 'Developer Experience',
    summary:
      'Standardized reusable frontend templates and AI-assisted development rules so generated code stays maintainable, consistent, and readable by engineers.',
    scope: [
      'Defined component structure conventions to prevent recurring UI and state bugs.',
      'Established reviewable patterns that speed up feature delivery without accumulating spaghetti code.',
    ],
    tags: ['Architecture', 'Templates', 'DX'],
    important: false,
  },
  {
    id: 'mss-16',
    folder: 'mss',
    subject: 'Technical app proposals & engineering documentation',
    company: 'PT. Mitra Seribu Saudara',
    role: 'Front-End MAUI .NET Developer',
    period: '2026',
    category: 'Documentation',
    summary:
      'Authored technical proposals, feature specifications, and handover documentation to align business stakeholders and engineering teams before implementation.',
    scope: [
      'Translated business requirements into scoped deliverables, flows, and API expectations.',
      'Documented architecture decisions for faster onboarding and ongoing maintenance.',
    ],
    tags: ['Technical Writing', 'Specs', 'Stakeholders'],
    important: false,
  },
  {
    id: 'eien-1',
    folder: 'eien_one',
    subject: 'E-commerce platforms for Erha and Derma',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'E-Commerce',
    summary:
      'Developed and maintained production e-commerce web platforms for beauty and dermatology brands Erha and Derma.',
    scope: [
      'Built storefront product flows, cart/checkout behavior, and backend service integrations.',
      'Supported high-visibility retail campaigns requiring reliable uptime and responsive UI.',
    ],
    tags: ['.NET', 'E-Commerce', 'Web App'],
    important: false,
  },
  {
    id: 'eien-2',
    folder: 'eien_one',
    subject: 'Enterprise procurement system for Arya Noble',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Enterprise Ops',
    summary:
      'Built internal procurement workflows for Arya Noble to digitize vendor purchasing requests and multi-step approval chains.',
    scope: [
      'Implemented role-based request submission, review stages, and status tracking.',
      'Reduced manual spreadsheet handoffs across purchasing and finance stakeholders.',
    ],
    tags: ['.NET', 'Procurement', 'Workflows'],
    important: false,
  },
  {
    id: 'eien-3',
    folder: 'eien_one',
    subject: 'Bank Central Asia (BCA) queuing system maintenance',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Banking Systems',
    summary:
      'Maintained and supported branch queuing software used by Bank Central Asia, prioritizing uptime and predictable daily operation.',
    scope: [
      'Investigated production incidents and shipped targeted stability fixes.',
      'Ensured smooth queue ticketing and counter routing under high daily branch traffic.',
    ],
    tags: ['Maintenance', 'High Reliability', 'Enterprise'],
    important: false,
  },
  {
    id: 'eien-4',
    folder: 'eien_one',
    subject: 'RDLC financial reports & landing pages (Karina, Lorena, Great Eastern)',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Reporting & Web',
    summary:
      'Built automated RDLC reporting engines and responsive web landing pages for enterprise clients including Karina, Lorena, and Great Eastern.',
    scope: [
      'Designed printable, data-accurate RDLC report layouts connected to SQL datasets.',
      'Delivered client-facing web pages aligned with brand guidelines.',
    ],
    tags: ['RDLC Reports', 'SQL', 'Web'],
    important: false,
  },
  {
    id: 'eien-5',
    folder: 'eien_one',
    subject: 'Automated web scraping tool for resellers',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Automation',
    summary:
      'Developed an automated data-collection tool to help reseller teams gather and structure product/pricing listings without manual browsing.',
    scope: [
      'Automated repetitive catalog extraction into clean structured outputs.',
      'Saved operations staff hours of manual product monitoring each week.',
    ],
    tags: ['Automation', 'Scraping', 'Data'],
    important: false,
  },
  {
    id: 'eien-6',
    folder: 'eien_one',
    subject: 'Web-based Point of Sale (POS) system',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Retail POS',
    summary:
      'Engineered a browser-based Point of Sale interface built for fast cashier checkout in real retail environments.',
    scope: [
      'Streamlined item lookup, transaction entry, and receipt generation for store staff.',
      'Connected sales entries directly into shared backend inventory and reporting.',
    ],
    tags: ['.NET', 'Blazor', 'React', 'POS'],
    important: false,
  },
  {
    id: 'eien-7',
    folder: 'eien_one',
    subject: 'Task tracker & face-recognition attendance refactor',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Internal Tooling',
    summary:
      'Refactored an internal task management tool alongside a face-recognition employee attendance module to improve reliability and maintainability.',
    scope: [
      'Cleaned up legacy code paths and stabilized biometric check-in flows.',
      'Improved daily usability for staff tracking tasks and attendance records.',
    ],
    tags: ['Refactoring', 'Attendance', 'Internal App'],
    important: false,
  },
  {
    id: 'eien-8',
    folder: 'eien_one',
    subject: 'Company-wide Google Workspace to Microsoft 365 migration',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'IT Infrastructure',
    summary:
      'Led the internal IT migration from Google Workspace to Microsoft 365, coordinating mail, accounts, and rollout with minimal team disruption.',
    scope: [
      'Planned mailbox transfers, domain DNS cutover, and user onboarding across departments.',
      'Handled post-migration troubleshooting and workstation configuration.',
    ],
    tags: ['Microsoft 365', 'Migration', 'IT Ops'],
    important: true,
  },
  {
    id: 'eien-9',
    folder: 'eien_one',
    subject: 'Pre-sales & technical demos for local and overseas clients',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Client Delivery',
    summary:
      'Supported pitch demos and technical scoping sessions that helped win software projects with both Indonesian and international clients.',
    scope: [
      'Walked non-technical stakeholders through architecture options and working prototypes.',
      'Bridged design, engineering, and client expectations during discovery.',
    ],
    tags: ['Client Demos', 'Scoping', 'Communication'],
    important: false,
  },
  {
    id: 'eien-10',
    folder: 'eien_one',
    subject: 'Vendor coordination for company merchandise & uniforms',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'Operations',
    summary:
      'Coordinated external vendors, design specs, and production quality checks for company jackets and branded merchandise.',
    scope: [
      'Managed print/material specs, timelines, and delivery sign-off with suppliers.',
    ],
    tags: ['Operations', 'Vendor Management'],
    important: false,
  },
  {
    id: 'eien-11',
    folder: 'eien_one',
    subject: 'Client Figma adjustments & digital brand assets',
    company: 'eien_one',
    role: 'Full-Stack .NET Developer & IT Staff',
    period: '2022 – 2024',
    category: 'UI & Visuals',
    summary:
      'Supported rapid client UI revisions in Figma and produced social/promotional graphic edits when teams needed fast turnaround.',
    scope: [
      'Iterated on layout spacing, visual assets, and responsive polish directly in Figma.',
    ],
    tags: ['Figma', 'UI Polish', 'Design Support'],
    important: false,
  },
];
