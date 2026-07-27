import { Component, signal } from '@angular/core';
import { BackgroundGradientsComponent } from './components/background-gradients/background-gradients';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor';
import { IntroLoaderComponent } from './components/intro-loader/intro-loader';
import { HeroComponent } from './components/hero/hero';
import { ChatAssistantComponent } from './components/chat-assistant/chat-assistant';
import { AboutBioComponent } from './components/about-bio/about-bio';
import { BusinessLogicComponent } from './components/business-logic/business-logic';
import { TrustSignalsComponent } from './components/trust-signals/trust-signals';
import { ProjectsComponent } from './components/projects/projects';
import { ToolsComponent } from './components/tools/tools';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    BackgroundGradientsComponent,
    CustomCursorComponent,
    IntroLoaderComponent,
    HeroComponent,
    AboutBioComponent,
    ToolsComponent,
    ProjectsComponent,
    TrustSignalsComponent,
    BusinessLogicComponent,
    ChatAssistantComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isAppUnlocked = signal(false);

  onAppUnlocked() {
    this.isAppUnlocked.set(true);
  }
}

