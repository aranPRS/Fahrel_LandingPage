import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tilt]',
  standalone: true
})
export class TiltDirective {
  @Input() maxTiltAngle = 10; // Maximum rotation angle in degrees
  @Input() tiltScale = 1.03; // Scale on hover

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    // Ensure parent/self supports 3D layout
    this.renderer.setStyle(this.el.nativeElement, 'transform-style', 'preserve-3d');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const bound = this.el.nativeElement.getBoundingClientRect();
    
    const width = bound.width;
    const height = bound.height;
    
    // Position of mouse relative to card top-left
    const x = event.clientX - bound.left;
    const y = event.clientY - bound.top;
    
    // Normalized position relative to center (-0.5 to 0.5)
    const px = (x / width) - 0.5;
    const py = (y / height) - 0.5;
    
    // Calculate rotation angles
    const rotateY = px * this.maxTiltAngle * 2; // horizontal tilt
    const rotateX = -py * this.maxTiltAngle * 2; // vertical tilt (negative because cursor above center tilts card forward)
    
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(1000px) scale3d(${this.tiltScale}, ${this.tiltScale}, ${this.tiltScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Return smoothly to normal
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'
    );
    
    // Reset transition
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    }, 500);
  }
}
