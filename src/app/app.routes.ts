import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PressComponent } from './pages/press/press.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CalendarComponent } from './pages/competition/calendar/calendar.component';
import { BaremesComponent } from './pages/competition/baremes/baremes.component';
import { ResultsComponent } from './pages/competition/results/results.component';
import { TeamComponent } from './pages/team/team.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'press', component: PressComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'competition',
    component: CompetitionComponent,
    children: [
      { path: 'calendar', component: CalendarComponent },
      { path: 'baremes', component: BaremesComponent },
      { path: 'results', component: ResultsComponent },
    ],
  },
  { path: 'team', component: TeamComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: '*', component: HomeComponent },
];
