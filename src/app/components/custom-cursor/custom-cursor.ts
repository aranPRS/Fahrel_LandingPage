import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor.html',
  styleUrl: './custom-cursor.css'
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  // Mouse target positions
  private targetX = 0;
  private targetY = 0;
  
  // Interpolated visual positions
  dotX = 0;
  dotY = 0;
  ringX = 0;
  ringY = 0;

  // Active state
  isActive = false;
  
  // Hover states
  isHovered = false;
  isHoveredGlass = false;
  hasLabel = false;
  hasLabelPurple = false;
  labelText = '';

  private animationFrameId: number | null = null;
  private isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      document.body.classList.add('custom-cursor-enabled');
      this.startLoop();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.body.classList.remove('custom-cursor-enabled');
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  private startLoop() {
    // Run outside Angular change detection to prevent continuous digest cycles (crucial for performance)
    this.ngZone.runOutsideAngular(() => {
      const update = () => {
        // Dot tracks mouse quickly
        this.dotX += (this.targetX - this.dotX) * 0.45;
        this.dotY += (this.targetY - this.dotY) * 0.45;
        
        // Ring tracks mouse with spring delay (lag effect)
        this.ringX += (this.targetX - this.ringX) * 0.15;
        this.ringY += (this.targetY - this.ringY) * 0.15;
        
        // Trigger manual change detection occasionally or bind to values
        // To be safe and performant, we can trigger change detection inside Angular
        // by wrapping it in run() if the positions differ significantly
        if (Math.abs(this.ringX - this.targetX) > 0.1 || Math.abs(this.dotX - this.targetX) > 0.1) {
          this.ngZone.run(() => {});
        }
        
        this.animationFrameId = requestAnimationFrame(update);
      };
      
      this.animationFrameId = requestAnimationFrame(update);
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
    
    if (!this.isActive) {
      this.isActive = true;
    }
    
    // Check what element the mouse is over
    const target = event.target as HTMLElement;
    if (!target) return;
    
    // Check close ancestors for interactive elements
    const interactive = target.closest('a, button, [magnetic], [tilt], input, textarea, select, .interactive-card');
    
    if (interactive) {
      const cursorLabel = interactive.getAttribute('data-cursor-label');
      const cursorColor = interactive.getAttribute('data-cursor-color'); // 'orange' or 'purple'
      
      if (cursorLabel) {
        this.labelText = cursorLabel;
        this.hasLabel = true;
        this.isHovered = true;
        this.isHoveredGlass = false;
        
        if (cursorColor === 'purple') {
          this.hasLabelPurple = true;
        } else {
          this.hasLabelPurple = false;
        }
      } else {
        // Basic scale up hover
        this.labelText = '';
        this.hasLabel = false;
        this.hasLabelPurple = false;
        
        // Glass buttons look nice with secondary rings
        if (interactive.classList.contains('framer-v-1sxfr58') || interactive.getAttribute('data-framer-name') === 'Glass') {
          this.isHoveredGlass = true;
          this.isHovered = false;
        } else {
          this.isHovered = true;
          this.isHoveredGlass = false;
        }
      }
    } else {
      // Reset states
      this.isHovered = false;
      this.isHoveredGlass = false;
      this.hasLabel = false;
      this.hasLabelPurple = false;
      this.labelText = '';
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.isActive = false;
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.isActive = true;
  }
}
