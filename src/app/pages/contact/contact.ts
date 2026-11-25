import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AeroIconComponent } from '../../components/aero-icon/aero-icon';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, AeroIconComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPageComponent {
  readonly email = 'fahrelardhanassegaff@gmail.com';
  readonly phone = '+62 857-7342-7134';
  readonly whatsappLink = 'https://wa.me/6285773427134';
  readonly linkedinLink = 'https://linkedin.com/in/fahrel-ardhan-assegaf-479180241';
  readonly location = 'Jakarta, Indonesia';

  readonly senderName = signal('');
  readonly subject = signal('');
  readonly message = signal('');
  readonly copiedEmail = signal(false);

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(this.email).catch(() => {});
    }
    this.copiedEmail.set(true);
    setTimeout(() => this.copiedEmail.set(false), 2000);
  }

  buildMailtoHref(): string {
    const subj = this.subject().trim() || 'Project / Role Inquiry';
    const fromLine = this.senderName().trim() ? `From: ${this.senderName().trim()}\n\n` : '';
    const body = `${fromLine}${this.message().trim()}`;
    return `mailto:${this.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  }
}
