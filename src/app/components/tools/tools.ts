import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './tools.html',
  styleUrl: './tools.css'
})
export class ToolsComponent {
  skillGroups = signal<SkillGroup[]>([
    {
      category: 'Languages & Frameworks',
      skills: ['.NET (MAUI, Blazor, C#)', 'Laravel', 'React', 'CodeIgniter 3', 'Flutter', 'SQL']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Figma', 'Microsoft Office 365', 'Git', 'RDLC Reports', 'REST APIs', 'Agile Scrum']
    },
    {
      category: 'IT & Systems / Other',
      skills: ['Hardware Troubleshooting', 'OS Installation', 'System Configuration', 'Laptop Maintenance', 'Canva', 'Video Editing']
    }
  ]);
}
