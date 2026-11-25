import { Component, HostListener, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AeroIconComponent, AeroIconName } from '../../components/aero-icon/aero-icon';
import { CatgirlHelperComponent } from '../../components/catgirl-helper/catgirl-helper';

type WindowId = 'hero' | 'receipts' | 'note';

interface WindowState {
  x: number;
  y: number;
  z: number;
}

interface DesktopShortcut {
  label: string;
  route: string;
  icon: AeroIconName;
  tint: 'aqua' | 'mint' | 'sky' | 'gold';
}

interface ShippedHighlight {
  org: string;
  period: string;
  summary: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, AeroIconComponent, CatgirlHelperComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePageComponent {
  readonly shortcuts: DesktopShortcut[] = [
    { label: 'Career.mail', route: '/experience', icon: 'briefcase', tint: 'aqua' },
    { label: 'Projects.dir', route: '/projects', icon: 'folder', tint: 'mint' },
    { label: 'About.txt', route: '/about', icon: 'user', tint: 'sky' },
    { label: 'Contact.msn', route: '/contact', icon: 'mail', tint: 'gold' },
  ];

  readonly coreStack = [
    '.NET MAUI',
    'Blazor',
    'C#',
    'Laravel',
    'React',
    'CodeIgniter 3',
    'Flutter',
    'SQL',
  ];

  readonly highlights: ShippedHighlight[] = [
    {
      org: 'PT. Mitra Seribu Saudara',
      period: '2026–Now',
      summary: 'SKU Admin in .NET MAUI, ScanWin tuning, 1000 Saudara marketplace, iOS & Android releases.',
    },
    {
      org: 'UNHAN Admission Portal',
      period: '2025',
      summary: 'High-concurrency national registration & verification system built on CodeIgniter 3 & MySQL.',
    },
    {
      org: 'ForexPintar App & Admin',
      period: '2025',
      summary: 'Cross-platform .NET MAUI app paired with a Blazor WebAssembly admin portal.',
    },
    {
      org: 'eien_one',
      period: '2022–2024',
      summary: 'Erha/Derma e-commerce, Arya Noble procurement, BCA queuing, POS, RDLC reports & M365 migration.',
    },
  ];

  readonly assistantNotes: string[] = [
    'Yes, you can drag these windows by their titlebars. Most portfolios only pretend to be a desktop.',
    '17 shipped deliverables across enterprise, retail, and mobile. Open Career.mail if you want receipts.',
    'Prefer skipping the tour? Contact.msn has direct Email, WhatsApp, and LinkedIn.',
  ];

  private topZ = 12;
  private dragContext: {
    id: WindowId;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null = null;

  readonly draggingId = signal<WindowId | null>(null);

  readonly windows = signal<Record<WindowId, WindowState>>({
    hero: { x: 0, y: 0, z: 10 },
    receipts: { x: 0, y: 0, z: 11 },
    note: { x: 0, y: 0, z: 12 },
  });

  readonly hasMoved = computed(() => {
    const state = this.windows();
    return (
      state.hero.x !== 0 ||
      state.hero.y !== 0 ||
      state.receipts.x !== 0 ||
      state.receipts.y !== 0 ||
      state.note.x !== 0 ||
      state.note.y !== 0
    );
  });

  bringToFront(id: WindowId): void {
    this.topZ += 1;
    const nextZ = this.topZ;
    this.windows.update((prev) => ({
      ...prev,
      [id]: { ...prev[id], z: nextZ },
    }));
  }

  startDrag(event: PointerEvent, id: WindowId): void {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }
    event.preventDefault();
    (event.currentTarget as HTMLElement | null)?.setPointerCapture?.(event.pointerId);
    this.bringToFront(id);
    const current = this.windows()[id];
    this.dragContext = {
      id,
      startX: event.clientX,
      startY: event.clientY,
      originX: current.x,
      originY: current.y,
    };
    this.draggingId.set(id);
  }

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.dragContext) {
      return;
    }
    const { id, startX, startY, originX, originY } = this.dragContext;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    const isNarrow = typeof window !== 'undefined' && window.innerWidth <= 980;
    const maxX = isNarrow ? 90 : 260;
    const clampedX = Math.max(-maxX, Math.min(maxX, originX + dx));
    const clampedY = Math.max(-140, Math.min(220, originY + dy));

    this.windows.update((prev) => ({
      ...prev,
      [id]: { ...prev[id], x: clampedX, y: clampedY },
    }));
  }

  @HostListener('window:pointerup')
  @HostListener('window:pointercancel')
  endDrag(): void {
    if (!this.dragContext) {
      return;
    }
    this.dragContext = null;
    this.draggingId.set(null);
  }

  resetLayout(): void {
    this.topZ = 12;
    this.windows.set({
      hero: { x: 0, y: 0, z: 10 },
      receipts: { x: 0, y: 0, z: 11 },
      note: { x: 0, y: 0, z: 12 },
    });
  }

  windowTransform(id: WindowId, baseRotateDeg = 0): string {
    const { x, y } = this.windows()[id];
    const rotate = baseRotateDeg !== 0 && x === 0 && y === 0 ? ` rotate(${baseRotateDeg}deg)` : '';
    return `translate3d(${x}px, ${y}px, 0)${rotate}`;
  }
}
