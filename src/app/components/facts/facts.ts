import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

interface FactItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, TiltDirective],
  templateUrl: './facts.html',
  styleUrl: './facts.css'
})
export class FactsComponent {
  factsList = signal<FactItem[]>([
    { icon: '☕', text: 'I drink strong black coffee without sugar—simple and functional, just like my codebase.' },
    { icon: '📖', text: 'Completely self-taught. I spent thousands of hours learning from books, API documentations, and code reviews.' },
    { icon: '⚡', text: 'I build mock widgets in my spare time, trying out new formulas to turn complex calculations into visual sliders.' },
    { icon: '📂', text: 'Obsessed with clean file trees and database indexing. Messy folders are my only coding pet peeve.' }
  ]);
}
