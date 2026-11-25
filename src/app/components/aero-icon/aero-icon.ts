import { Component, input } from '@angular/core';

export type AeroIconName =
  | 'globe'
  | 'house'
  | 'briefcase'
  | 'folder'
  | 'user'
  | 'mail'
  | 'paperclip'
  | 'flag'
  | 'external'
  | 'copy'
  | 'check'
  | 'x';

@Component({
  selector: 'app-aero-icon',
  standalone: true,
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      [attr.width]="size()"
      [attr.height]="size()"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="aero-svg"
    >
      @switch (name()) {
        @case ('globe') {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        }
        @case ('house') {
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          />
        }
        @case ('briefcase') {
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        }
        @case ('folder') {
          <path
            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          />
        }
        @case ('user') {
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        }
        @case ('mail') {
          <path
            d="M 20 0 L 11.009 5.727 C 10.388 6.088 9.621 6.088 9 5.727 L 0 0"
            transform="translate(2 7)"
          />
          <path
            d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z"
            transform="translate(2 4)"
          />
        }
        @case ('paperclip') {
          <path
            d="M 12.999 2.828 L 4.585 11.414 C 3.804 12.195 3.804 13.462 4.585 14.243 C 5.366 15.024 6.633 15.024 7.414 14.243 L 15.828 5.657 C 17.39 4.095 17.39 1.562 15.828 0 C 14.266 -1.562 11.733 -1.562 10.171 0 L 1.792 8.551 C 0.256 10.063 -0.352 12.282 0.2 14.365 C 0.753 16.449 2.38 18.076 4.463 18.628 C 6.546 19.18 8.766 18.572 10.277 17.036 L 18.656 8.485"
            transform="translate(3.001 3.172)"
          />
        }
        @case ('flag') {
          <path
            d="M 0 20 L 0 2 C 0 1.685 0.148 1.389 0.4 1.2 C 1.439 0.421 2.702 0 4 0 C 7 0 9 2 11.333 2 C 12.666 2 13.689 1.733 14.4 1.2 C 14.703 0.973 15.108 0.936 15.447 1.106 C 15.786 1.275 16 1.621 16 2 L 16 12 C 16 12.315 15.852 12.611 15.6 12.8 C 14.561 13.579 13.298 14 12 14 C 9 14 7 12 4 12 C 2.524 12 1.1 12.544 0 13.528"
            transform="translate(4 2)"
          />
        }
        @case ('external') {
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        }
        @case ('copy') {
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        }
        @case ('check') {
          <path d="M20 6 9 17l-5-5" />
        }
        @case ('x') {
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 0;
    }
    .aero-svg {
      display: block;
    }
  `,
})
export class AeroIconComponent {
  readonly name = input.required<AeroIconName>();
  readonly size = input<number>(14);
}
