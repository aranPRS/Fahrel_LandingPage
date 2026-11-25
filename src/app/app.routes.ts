import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about';
import { ContactPageComponent } from './pages/contact/contact';
import { ExperiencePageComponent } from './pages/experience/experience';
import { HomePageComponent } from './pages/home/home';
import { ProjectsPageComponent } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Fahrel Ardhan Assegaff — Software Engineer',
    data: { address: 'fahrel.dev/' },
  },
  {
    path: 'experience',
    component: ExperiencePageComponent,
    title: 'Experience — Fahrel Ardhan Assegaff',
    data: { address: 'fahrel.dev/experience' },
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: 'Projects — Fahrel Ardhan Assegaff',
    data: { address: 'fahrel.dev/projects' },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'About — Fahrel Ardhan Assegaff',
    data: { address: 'fahrel.dev/about' },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title: 'Contact — Fahrel Ardhan Assegaff',
    data: { address: 'fahrel.dev/contact' },
  },
  {
    path: 'hobbies',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'dont-open',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
