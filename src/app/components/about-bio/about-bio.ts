import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-bio',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about-bio.html',
  styleUrl: './about-bio.css'
})
export class AboutBioComponent {
  timeline = signal<TimelineStep[]>([
    {
      number: '01',
      title: 'First Code & Fixing Hardware',
      description: 'Began by taking apart computers, setting up local networks, and learning basic programming logic.'
    },
    {
      number: '02',
      title: 'Learning Software Engineering',
      description: 'Dived deep into .NET ecosystem, object-oriented architectures, database designs, and APIs.'
    },
    {
      number: '03',
      title: 'Building Business Solutions',
      description: 'Shifted focus from simple coding to modeling business processes: inventory, billing, POS systems.'
    },
    {
      number: '04',
      title: 'Enterprise ERP Integrations',
      description: 'Worked with enterprise tools, customizing ERP modules, optimizing slow queries, and designing microservices.'
    },
    {
      number: '05',
      title: 'Government & Scaled Portals',
      description: 'Designed and deployed secure, robust application portals for state/government-supported agencies.'
    },
    {
      number: '06',
      title: 'AI Workflows & Consulting',
      description: 'Helping modern businesses grow by combining standard database systems with advanced AI integration agents.'
    }
  ]);
}
