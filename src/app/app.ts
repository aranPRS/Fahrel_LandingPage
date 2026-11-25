import { Component } from '@angular/core';
import { BrowserShellComponent } from './components/browser-shell/browser-shell';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrowserShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
