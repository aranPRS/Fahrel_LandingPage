import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[magnetic]',
  standalone: true
})
export class MagneticDirective {
  @Input() magneticStrength = 0.3; // Strength of the pull (0.1 to 0.5)

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const bound = this.el.nativeElement.getBoundingClientRect();
    
    // Get cursor relative position from center of button
    const cx = bound.left + bound.width / 2;
    const cy = bound.top + bound.height / 2;
    
    const mx = event.clientX;
    const my = event.clientY;
    
    const dx = mx - cx;
    const dy = my - cy;
    
    // Translate the element by a fraction of the distance
    const tx = dx * this.magneticStrength;
    const ty = dy * this.magneticStrength;
    
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate3d(${tx}px, ${ty}px, 0)`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Smooth transition back to origin
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(0, 0, 0)');
    
    // Reset transition settings after return animation finishes
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    }, 500);
  }
}
