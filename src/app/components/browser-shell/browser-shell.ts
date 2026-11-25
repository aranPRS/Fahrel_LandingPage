import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { AeroIconComponent, AeroIconName } from '../aero-icon/aero-icon';

export interface BrowserTabItem {
  label: string;
  route: string;
  icon: AeroIconName;
  exact?: boolean;
}

@Component({
  selector: 'app-browser-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AeroIconComponent],
  templateUrl: './browser-shell.html',
  styleUrl: './browser-shell.css',
})
export class BrowserShellComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly address = signal('fahrel.dev/');

  readonly tabs: BrowserTabItem[] = [
    { label: 'Home.exe', route: '/', icon: 'house', exact: true },
    { label: 'Career.mail', route: '/experience', icon: 'briefcase' },
    { label: 'Projects.dir', route: '/projects', icon: 'folder' },
    { label: 'About.txt', route: '/about', icon: 'user' },
  ];

  constructor() {
    this.syncAddressFromRoute();
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.syncAddressFromRoute();
      });
  }

  private syncAddressFromRoute(): void {
    let current: ActivatedRoute | null = this.activatedRoute;
    while (current?.firstChild) {
      current = current.firstChild;
    }
    const routeAddress = current?.snapshot.data?.['address'] as string | undefined;
    this.address.set(routeAddress ?? 'fahrel.dev/');
  }
}
