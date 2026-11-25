import { Component } from '@angular/core';
import { FahrelMailComponent } from '../../components/fahrel-mail/fahrel-mail';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [FahrelMailComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperiencePageComponent {}
