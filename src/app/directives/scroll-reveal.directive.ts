import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() revealDelay = 0; // Delay in ms

  private static observer: IntersectionObserver | null = null;
  private static observedElements = new Map<Element, { callback: () => void }>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Add base hidden class
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
    
    if (this.revealDelay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${this.revealDelay}ms`);
    }

    this.initObserver();
    ScrollRevealDirective.observedElements.set(this.el.nativeElement, {
      callback: () => {
        this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
        this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
      }
    });

    ScrollRevealDirective.observer?.observe(this.el.nativeElement);
  }

  private initObserver() {
    if (ScrollRevealDirective.observer) return;

    ScrollRevealDirective.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const handler = ScrollRevealDirective.observedElements.get(entry.target);
          if (handler) {
            handler.callback();
            ScrollRevealDirective.observer?.unobserve(entry.target);
            ScrollRevealDirective.observedElements.delete(entry.target);
          }
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Slightly trigger before scrolling completely in
    });
  }
}
