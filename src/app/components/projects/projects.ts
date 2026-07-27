import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Project {
  title: string;
  role: string;
  year: string;
  tags: string[];
  problem: string;
  result: string;
  graphicType: 'mobile' | 'unhan' | 'cms' | 'net' | 'maui';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'ForexPintar Mobile App & Admin Dashboard',
      role: 'Mobile App Developer (Remote)',
      year: '2025',
      tags: ['.NET MAUI', 'Blazor WebAssembly', 'C#', 'RESTful API'],
      problem: 'The client required a responsive cross-platform mobile application (iOS & Android) integrated directly with a WebAssembly admin dashboard for real-time financial tracking and user data monitoring.',
      result: 'Engineered cross-platform mobile app using .NET MAUI and Blazor WebAssembly admin dashboard from scratch. Handled full end-to-end RESTful API integration and presented live product demos directly to executive stakeholders.',
      graphicType: 'mobile'
    },
    {
      title: 'UNHAN National Student Admission Portal',
      role: 'Full-Stack Developer & Verification Admin (Remote)',
      year: '2025',
      tags: ['CodeIgniter 3', 'PHP', 'MySQL', 'System Admin'],
      problem: 'The Defense University required a centralized online registration platform capable of processing high-concurrency applicant data and document verification securely during national recruitment cycles.',
      result: 'Architected MySQL database schema, developed responsive CodeIgniter 3 frontend & backend modules, and deployed a secure infrastructure that processed thousands of live applicant records. Acted as system administrator post-launch.',
      graphicType: 'unhan'
    },
    {
      title: 'Demoda Azaprima Landing Page & CMS',
      role: 'Full-Stack Developer (Remote)',
      year: '2025',
      tags: ['Laravel', 'PHP', 'MySQL', 'Custom CMS'],
      problem: 'The corporate client required a modern responsive landing page and custom Content Management System (CMS) so non-technical staff could manage product catalogs and articles independently.',
      result: 'Built responsive landing page and admin CMS powered by Laravel with intuitive management controls. Served as key technical liaison between design teams and business executives to align features with branding.',
      graphicType: 'cms'
    },
    {
      title: 'EienOne eCommerce, POS & Mobile App Platform',
      role: 'Full-Stack .NET Developer & IT Staff',
      year: '2022 – 2024',
      tags: ['.NET', 'Blazor', 'React', 'RDLC Reports', 'Microsoft 365'],
      problem: 'The enterprise required a unified commercial ecosystem encompassing eCommerce web platforms, Point of Sale (POS) cashier tools, procurement hardware tools, and mobile shopping apps.',
      result: 'Developed and deployed multi-channel commercial platforms powered by .NET, Blazor, and React. Built automated RDLC financial reporting engines and led internal enterprise IT migration from Google Suite to Microsoft 365.',
      graphicType: 'net'
    },
    {
      title: 'PT. Mitra Seribu Saudara SKU Admin & ScanWin App',
      role: 'Front-End MAUI .NET Developer',
      year: '2026 – Ongoing',
      tags: ['.NET MAUI', 'C#', 'RESTful API', 'Agile Scrum', 'Figma'],
      problem: 'The warehouse Stock Keeping Unit (SKU) administration portal needed to be built from scratch, and the ScanWin mobile scanner app required performance optimization and UI refactoring.',
      result: 'Designed and engineered complete SKU Admin module with responsive CRUD controls in .NET MAUI. Created reusable C# component frameworks and optimized ScanWin Mobile App performance while reducing application package size.',
      graphicType: 'maui'
    }
  ]);
}
