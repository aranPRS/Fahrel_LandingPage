import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';

@Component({
  selector: 'app-catgirl-helper',
  standalone: true,
  templateUrl: './catgirl-helper.html',
  styleUrl: './catgirl-helper.css',
})
export class CatgirlHelperComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private typingTimer: ReturnType<typeof setInterval> | null = null;
  private cycleTimer: ReturnType<typeof setTimeout> | null = null;

  readonly message = input<string>(
    'Drag any window titlebar on the desktop to rearrange the layout.'
  );
  readonly messages = input<string[]>([]);
  readonly title = input<string>('assistant.msn · online');
  readonly popupSide = input<'left' | 'right'>('left');
  readonly typingSpeedMs = input<number>(18);
  readonly autoCycleMs = input<number>(4000);

  readonly isOpen = signal(false);
  readonly activeIndex = signal(-1);
  readonly displayedMessage = signal('');
  readonly isTyping = signal(false);

  readonly allMessages = computed<string[]>(() => {
    const list = this.messages();
    return list.length > 0 ? list : [this.message()];
  });

  readonly currentIndex = computed<number>(() => {
    const idx = this.activeIndex();
    return idx < 0 ? 0 : idx % this.allMessages().length;
  });

  readonly currentMessage = computed<string>(() => {
    const list = this.allMessages();
    return list[this.currentIndex()] ?? this.message();
  });

  readonly hasMultiple = computed<boolean>(() => this.allMessages().length > 1);

  constructor() {
    this.destroyRef.onDestroy(() => this.clearTimers());
  }

  ngOnInit(): void {
    this.showNextTip();
  }

  onSpriteClick(): void {
    this.showNextTip();
  }

  closeChat(): void {
    this.clearTimers();
    this.isOpen.set(false);
  }

  private showNextTip(): void {
    const total = this.allMessages().length;
    this.activeIndex.update((i) => (i + 1) % total);
    this.isOpen.set(true);
    this.startTyping(this.currentMessage());
  }

  private startTyping(fullText: string): void {
    this.clearTimers();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || this.typingSpeedMs() <= 0) {
      this.displayedMessage.set(fullText);
      this.isTyping.set(false);
      this.scheduleNextCycle();
      return;
    }

    let cursor = 0;
    this.displayedMessage.set('');
    this.isTyping.set(true);

    this.typingTimer = setInterval(() => {
      cursor += 1;
      this.displayedMessage.set(fullText.slice(0, cursor));
      if (cursor >= fullText.length) {
        this.stopTyping();
        this.scheduleNextCycle();
      }
    }, this.typingSpeedMs());
  }

  private scheduleNextCycle(): void {
    if (!this.isOpen() || !this.hasMultiple() || this.autoCycleMs() <= 0) {
      return;
    }
    this.stopCycle();
    this.cycleTimer = setTimeout(() => {
      this.showNextTip();
    }, this.autoCycleMs());
  }

  private stopTyping(): void {
    if (this.typingTimer !== null) {
      clearInterval(this.typingTimer);
      this.typingTimer = null;
    }
    this.isTyping.set(false);
  }

  private stopCycle(): void {
    if (this.cycleTimer !== null) {
      clearTimeout(this.cycleTimer);
      this.cycleTimer = null;
    }
  }

  private clearTimers(): void {
    this.stopTyping();
    this.stopCycle();
  }
}
