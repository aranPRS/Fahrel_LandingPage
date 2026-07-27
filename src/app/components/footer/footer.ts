import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, TiltDirective, MagneticDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  email = 'fahrelardhanassegaff@gmail.com';
  phone = '+62 857-7342-7134';
  whatsappLink = 'https://wa.me/6285773427134';
  linkedinLink = 'https://linkedin.com/in/fahrel-ardhan-assegaf-479180241';
  location = 'Jakarta, Indonesia';
}
