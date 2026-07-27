import { Component, EventEmitter, Output, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-loader.html',
  styleUrl: './intro-loader.css'
})
export class IntroLoaderComponent implements OnInit, OnDestroy {
  @Output() unlocked = new EventEmitter<void>();

  lines = signal<string[]>([]);
  showPressEnter = signal<boolean>(false);
  isUnlocked = signal<boolean>(false);

  private allLines = [
    'FAHREL_ASSISTANT.OS [Version 2.2.0]',
    '(c) 2026 Fahrel Ardhan Assegaf. All rights reserved.',
    ' ',
    'Initializing secure core module...',
    'Loading business context rules...',
    'Loading AI integration layer...',
    'Identity verified: Software Engineer & AI Integrator',
    ' ',
    'Hi, I’m Fahrel. 👋',
    'I build software systems that help businesses solve real problems.',
    ' ',
    'Ready to explore.'
  ];

  private lineIndex = 0;
  private timerId: any = null;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.classList.add('body-locked');
    }
    this.printNextLine();
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  private printNextLine() {
    if (this.lineIndex < this.allLines.length) {
      this.lines.update(prev => [...prev, this.allLines[this.lineIndex]]);
      this.lineIndex++;
      
      const delay = this.allLines[this.lineIndex - 1] === ' ' ? 200 : Math.random() * 150 + 60;
      this.timerId = setTimeout(() => this.printNextLine(), delay);
    } else {
      this.showPressEnter.set(true);
    }
  }

  @HostListener('window:keydown.enter')
  @HostListener('window:wheel')
  @HostListener('window:touchmove')
  triggerUnlock() {
    if (!this.isUnlocked()) {
      this.isUnlocked.set(true);
      if (typeof document !== 'undefined') {
        document.body.classList.remove('body-locked');
      }
      setTimeout(() => {
        this.unlocked.emit();
      }, 1000);
    }
  }
}
