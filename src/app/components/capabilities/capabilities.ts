import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

interface CapabilityItem {
  index: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, TiltDirective],
  templateUrl: './capabilities.html',
  styleUrl: './capabilities.css'
})
export class CapabilitiesComponent {
  items = signal<CapabilityItem[]>([
    { index: '01', title: 'REST API & Microservices', description: 'Design and deployment of secure, high-throughput REST APIs using ASP.NET Core and Express.' },
    { index: '02', title: 'ERP Systems Integration', description: 'Customizing ERP database nodes (such as Odoo or ERPNext) to align with company procurement flows.' },
    { index: '03', title: 'Relational Database Nodes', description: 'Optimizing indexes, slow queries, and database architecture in SQL Server, PostgreSQL, and MySQL.' },
    { index: '04', title: 'Caching & Key-Value DBs', description: 'Using Redis and MongoDB to cache heavy dashboard reports and query loads for instantaneous speeds.' },
    { index: '05', title: 'Interactive Web Dashboards', description: 'Frontends that feel alive. High-fidelity layouts, graphs, and widgets utilizing Blazor or modern frameworks.' },
    { index: '06', title: 'Business Calculation Engines', description: 'Translating complex spreadsheet formulas into clean code algorithms for financial estimations.' },
    { index: '07', title: 'AI Automation Workflows', description: 'Automating administrative tasks, CRM logging, and Slack alerts using n8n and customized cron jobs.' },
    { index: '08', title: 'Custom LLM Pipelines', description: 'Plugging OpenAI and Claude APIs into private documents to perform semantic search, RAG, and summarization.' },
    { index: '09', title: 'Mobile Apps (Field Tools)', description: 'Multi-platform mobile app development with Flutter and MAUI to let field operators input data on the go.' },
    { index: '10', title: 'Cloud Infrastructure & IIS', description: 'Configuring secure host environments on IIS, Windows Server, AWS, or Azure for private business deployments.' },
    { index: '11', title: 'Legacy System Modernization', description: 'Refactoring and upgrading outdated applications (e.g., VB6 / older .NET) to modern C# architectures.' },
    { index: '12', title: 'Continuous Integration (CI/CD)', description: 'Setting up automated build and test pipelines to ensure updates are checked and deployed seamlessly.' }
  ]);
}
