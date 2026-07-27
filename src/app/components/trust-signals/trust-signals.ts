import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
}

@Component({
  selector: 'app-trust-signals',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './trust-signals.html',
  styleUrl: './trust-signals.css'
})
export class TrustSignalsComponent {
  experiences = signal<WorkExperience[]>([
    {
      company: 'PT. Mitra Seribu Saudara',
      location: 'Jakarta, ID',
      role: 'Front-End MAUI .NET Developer',
      period: '2026 – Ongoing',
      achievements: [
        'Developing and maintaining internal enterprise modules using .NET MAUI, from UI design to feature implementation.',
        'Optimizing company mobile applications for enhanced performance and user experience.'
      ]
    },
    {
      company: 'Freelance Full-Stack & Mobile Developer',
      location: 'Remote',
      role: 'Full-Stack & Mobile Engineer',
      period: '2025',
      achievements: [
        'Pursued full-time freelance engineering, delivering mobile and web applications for diverse clients — including cross-platform apps, admin dashboards, and custom CMS platforms.',
        'Managed end-to-end software delivery: client requirements discovery, system design, development, testing, and cloud deployment.'
      ]
    },
    {
      company: 'EienOne (PT. Era Informatika Elang Nusantara)',
      location: 'Jakarta, ID',
      role: 'Full-Stack .NET Developer & IT Staff',
      period: '2022 – 2024',
      achievements: [
        'Engineered eCommerce platforms, POS systems, procurement tools, and mobile shopping apps powered by .NET, Blazor, and React.',
        'Led internal enterprise IT migration from Google Suite to Microsoft 365 and served as technical instructor for developer bootcamps.'
      ]
    },
    {
      company: 'PT. Eco Beringin',
      location: 'Jakarta, ID',
      role: 'IT Intern',
      period: '2020',
      achievements: [
        'Performed laptop hardware grading, component disassembly, system inspection, OS installation, and IT setup.'
      ]
    }
  ]);

  education = signal<EducationItem[]>([
    {
      institution: 'University of Cyber Asia',
      degree: 'Bachelor of Information Systems (Ongoing)',
      location: 'Jakarta, ID'
    },
    {
      institution: 'Progate Frontend Bootcamp',
      degree: 'React Frontend Development',
      location: 'Jakarta, ID'
    },
    {
      institution: 'Yadika 3 Vocational School',
      degree: 'Computer & Network Engineering',
      location: 'Jakarta, ID'
    }
  ]);
}
