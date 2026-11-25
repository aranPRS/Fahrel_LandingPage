import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProjectCaseStudy {
  title: string;
  role: string;
  year: string;
  status: string;
  accent: 'aqua' | 'amber' | 'cobalt' | 'emerald' | 'teal';
  problem: string;
  result: string;
  tags: string[];
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsPageComponent {
  readonly projects: ProjectCaseStudy[] = [
    {
      title: 'PT. Mitra Seribu Saudara — SKU Admin & ScanWin',
      role: 'Front-End MAUI .NET Developer',
      year: '2026 – Ongoing',
      status: 'PRODUCTION',
      accent: 'aqua',
      problem:
        'Warehouse staff needed a dedicated SKU administration portal built from scratch, while the ScanWin mobile scanner app needed performance tuning and UI refactoring.',
      result:
        'Built the SKU Admin module with responsive CRUD flows and reusable C# components in .NET MAUI, while improving ScanWin runtime speed and trimming bundle size.',
      tags: ['.NET MAUI', 'C#', 'REST API', 'Agile Scrum', 'Figma'],
    },
    {
      title: 'ForexPintar Mobile App & Admin Dashboard',
      role: 'Mobile App Developer (Remote)',
      year: '2025',
      status: 'IN REGULATORY REVIEW',
      accent: 'amber',
      problem:
        'Required a cross-platform mobile application (iOS & Android) paired with a WebAssembly admin portal for real-time financial tracking and user monitoring.',
      result:
        'Engineered the mobile app in .NET MAUI and admin dashboard in Blazor WebAssembly from scratch, complete with REST API integration and executive demos.',
      tags: ['.NET MAUI', 'Blazor WASM', 'C#', 'REST API'],
    },
    {
      title: 'UNHAN National Student Admission Portal',
      role: 'Full-Stack Developer & Verification Admin',
      year: '2025',
      status: 'SHIPPED',
      accent: 'cobalt',
      problem:
        'The Defense University needed a centralized online registration and document verification portal capable of handling high-concurrency national recruitment cycles.',
      result:
        'Architected the MySQL schema, built CodeIgniter 3 frontend and backend modules, deployed secure infrastructure for thousands of live applicants, and ran post-launch admin ops.',
      tags: ['CodeIgniter 3', 'PHP', 'MySQL', 'System Admin'],
    },
    {
      title: 'Demoda Azaprima Landing Page & Custom CMS',
      role: 'Full-Stack Developer (Remote)',
      year: '2025',
      status: 'SHIPPED',
      accent: 'emerald',
      problem:
        'Corporate team needed a modern responsive landing page backed by a custom CMS so non-technical staff could update product catalogs and articles independently.',
      result:
        'Delivered a Laravel-powered landing page and admin CMS with clean content workflows, bridging design execution and executive sign-off.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Custom CMS'],
    },
    {
      title: 'eien_one eCommerce, POS & Enterprise Suite',
      role: 'Full-Stack .NET Developer & IT Staff',
      year: '2022 – 2024',
      status: 'PRODUCTION',
      accent: 'teal',
      problem:
        'Needed multi-channel retail and enterprise tools covering client e-commerce storefronts, cashier POS, procurement workflows, financial reporting, and internal IT.',
      result:
        'Built .NET, Blazor, and React platforms for Erha, Derma, and Arya Noble, delivered automated RDLC reports, maintained BCA queuing, and led Google Workspace to Microsoft 365 migration.',
      tags: ['.NET', 'Blazor', 'React', 'RDLC Reports', 'Microsoft 365'],
    },
  ];
}
