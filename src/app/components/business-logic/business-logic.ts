import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-business-logic',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, TiltDirective],
  templateUrl: './business-logic.html',
  styleUrl: './business-logic.css'
})
export class BusinessLogicComponent {
  email = 'fahrelardhanassegaff@gmail.com';
  whatsapp = 'https://wa.me/6285773427134';
  linkedin = 'https://linkedin.com/in/fahrel-ardhan-assegaf-479180241';
}
