import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MagneticDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  typingText = signal('');

  private words = [
    'Mobile Applications',
    'Web Systems',
    'UI/UX Interfaces',
    'API Integrations',
    'App Deployments',
    'Optimized Performance',
    'System Designs'
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout: any = null;

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  private tick() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.typingText.set(currentWord.substring(0, this.charIndex));

    let delta = 140 - Math.random() * 40;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      delta = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      delta = 400;
    }

    this.typingTimeout = setTimeout(() => this.tick(), delta);
  }
}
