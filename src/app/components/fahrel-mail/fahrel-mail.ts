import { Component, computed, signal } from '@angular/core';
import {
  CAREER_EMAILS,
  CareerEmail,
  MAIL_FOLDERS,
  MailFolderId,
  MailFolderMeta,
} from '../../data/career-emails';
import { AeroIconComponent } from '../aero-icon/aero-icon';

@Component({
  selector: 'app-fahrel-mail',
  standalone: true,
  imports: [AeroIconComponent],
  templateUrl: './fahrel-mail.html',
  styleUrl: './fahrel-mail.css',
})
export class FahrelMailComponent {
  readonly folders: MailFolderMeta[] = MAIL_FOLDERS;
  readonly activeFolder = signal<MailFolderId>('all');
  readonly selectedEmailId = signal<string>(CAREER_EMAILS[0].id);

  readonly activeFolderMeta = computed(
    () => this.folders.find((f) => f.id === this.activeFolder()) ?? this.folders[0]
  );

  readonly visibleEmails = computed<CareerEmail[]>(() => {
    const folder = this.activeFolder();
    if (folder === 'all') {
      return CAREER_EMAILS;
    }
    if (folder === 'highlights') {
      return CAREER_EMAILS.filter((email) => email.important);
    }
    return CAREER_EMAILS.filter((email) => email.folder === folder);
  });

  readonly selectedEmail = computed<CareerEmail>(() => {
    const visible = this.visibleEmails();
    const id = this.selectedEmailId();
    return visible.find((email) => email.id === id) ?? visible[0] ?? CAREER_EMAILS[0];
  });

  selectFolder(folderId: MailFolderId): void {
    this.activeFolder.set(folderId);
    const firstVisible = this.visibleEmails()[0];
    if (firstVisible) {
      this.selectedEmailId.set(firstVisible.id);
    }
  }

  selectEmail(emailId: string): void {
    this.selectedEmailId.set(emailId);
  }
}
