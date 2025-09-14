import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalsComponent } from './goals/goals.component';
import { SkillsComponent } from './skills/skills.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent }
];