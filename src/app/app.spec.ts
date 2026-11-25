import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { CatgirlHelperComponent } from './components/catgirl-helper/catgirl-helper';
import { FahrelMailComponent } from './components/fahrel-mail/fahrel-mail';
import { CAREER_EMAILS } from './data/career-emails';

describe('Fahrel Portfolio', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, FahrelMailComponent, CatgirlHelperComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app with streamlined Fahrel Explorer shell', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Fahrel Explorer');
    expect(el.textContent).toContain('Home.exe');
    expect(el.textContent).toContain('Career.mail');
    expect(el.querySelector('.bookmarks-bar')).toBeNull();
    expect(el.querySelectorAll('.browser-tab').length).toBe(4);
  });

  it('should render all 5 primary routes and update the address bar', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const expectations: [string, string, string][] = [
      ['/', 'fahrel.dev/', 'Quietly fixing the hard parts.'],
      ['/experience', 'fahrel.dev/experience', 'Fahrel Mail — Career Log'],
      ['/projects', 'fahrel.dev/projects', 'Selected Projects'],
      ['/about', 'fahrel.dev/about', 'Little details matter.'],
      ['/contact', 'fahrel.dev/contact', 'fahrelardhanassegaff@gmail.com'],
    ];

    for (const [path, expectedAddress, expectedText] of expectations) {
      await router.navigateByUrl(path);
      fixture.detectChanges();
      await fixture.whenStable();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.address-text')?.textContent?.trim()).toBe(expectedAddress);
      expect(el.textContent).toContain(expectedText);
    }
  });

  it('should redirect removed filler routes cleanly', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    await router.navigateByUrl('/hobbies');
    expect(router.url).toBe('/about');

    await router.navigateByUrl('/gallery');
    expect(router.url).toBe('/about');

    await router.navigateByUrl('/dont-open');
    expect(router.url).toBe('/');
  });

  it('should filter and display all 17 deliverables in Fahrel Mail', () => {
    const fixture = TestBed.createComponent(FahrelMailComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.visibleEmails().length).toBe(17);

    component.selectFolder('mss');
    fixture.detectChanges();
    expect(component.visibleEmails().length).toBe(6);

    component.selectFolder('eien_one');
    fixture.detectChanges();
    expect(component.visibleEmails().length).toBe(11);

    component.selectFolder('highlights');
    fixture.detectChanges();
    expect(component.visibleEmails().length).toBe(3);

    component.selectFolder('all');
    for (const email of CAREER_EMAILS) {
      component.selectEmail(email.id);
      fixture.detectChanges();
      expect(component.selectedEmail().subject).toBe(email.subject);
      expect(component.selectedEmail().summary).toBe(email.summary);
    }
  });

  it('should auto-open, type out, auto-cycle every 4s, advance on click, and close', () => {
    vi.useFakeTimers();
    try {
      const fixture = TestBed.createComponent(CatgirlHelperComponent);
      fixture.componentRef.setInput('messages', ['First note', 'Second note']);
      fixture.componentRef.setInput('typingSpeedMs', 10);
      fixture.componentRef.setInput('autoCycleMs', 4000);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const trigger = el.querySelector('.catgirl-trigger') as HTMLButtonElement;

      // Opens automatically without clicking and types out the first tip
      expect(el.querySelector('.msn-dialog')).not.toBeNull();
      expect(el.querySelector('.msn-dialog-message')?.textContent).toBe('');

      vi.advanceTimersByTime(50);
      fixture.detectChanges();
      expect(el.querySelector('.msn-dialog-message')?.textContent).toBe('First');

      vi.advanceTimersByTime(50);
      fixture.detectChanges();
      expect(el.querySelector('.msn-dialog-message')?.textContent).toBe('First note');

      // Auto-cycles to second tip after 4 seconds without clicking
      vi.advanceTimersByTime(4000);
      vi.advanceTimersByTime(200);
      fixture.detectChanges();
      expect(el.querySelector('.msn-dialog-message')?.textContent).toBe('Second note');

      // Clicking the sprite immediately advances to the next tip
      trigger.click();
      vi.advanceTimersByTime(200);
      fixture.detectChanges();
      expect(el.querySelector('.msn-dialog-message')?.textContent).toBe('First note');

      // Closing dismisses and pauses auto-cycle
      (el.querySelector('.msn-close-btn') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(el.querySelector('.msn-dialog')).toBeNull();

      vi.advanceTimersByTime(5000);
      fixture.detectChanges();
      expect(el.querySelector('.msn-dialog')).toBeNull();
    } finally {
      vi.useRealTimers();
    }
  });
});
