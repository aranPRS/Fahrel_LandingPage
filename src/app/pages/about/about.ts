import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SkillGroup {
  category: string;
  items: string[];
}

interface InterestItem {
  label: string;
  note: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutPageComponent {
  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Languages & Frameworks',
      items: ['.NET (MAUI, Blazor, C#)', 'Laravel', 'React', 'CodeIgniter 3', 'Flutter', 'SQL'],
    },
    {
      category: 'Tools & Platforms',
      items: ['REST APIs', 'RDLC Reports', 'Figma', 'Microsoft 365', 'Git', 'Agile Scrum'],
    },
    {
      category: 'IT & Systems',
      items: ['System Configuration', 'OS & Hardware Maintenance', 'Canva', 'Video Editing'],
    },
  ];

  readonly interests: InterestItem[] = [
    { label: 'Novels', note: 'Slow reads that reward paying attention to subtle setups.' },
    { label: 'Headphones & music', note: 'Best debugging tool when the spec gets noisy.' },
    { label: 'Strength training', note: 'Keeps the spine intact after long sprint weeks.' },
    { label: 'Anime', note: 'A permanently growing watchlist that somehow never shrinks.' },
    { label: 'Cigars', note: 'Unrushed breaks — good thinking rarely happens in a hurry.' },
    { label: 'Hands-on crafts', note: 'Building physical things is a nice break from pixels.' },
    { label: 'Gaming', note: 'Strategy and mechanics over mindless grinding.' },
  ];

  readonly selectedInterest = signal<string>(this.interests[0].label);

  readonly activeInterestNote = computed(() => {
    const label = this.selectedInterest();
    return this.interests.find((item) => item.label === label)?.note ?? this.interests[0].note;
  });

  selectInterest(label: string): void {
    this.selectedInterest.set(label);
  }
}
