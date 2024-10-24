import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PressComponent } from './pages/press/press.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'press', component: PressComponent},
    {path: 'practice', component: PracticeComponent},
    {path: 'documentation', component: DocumentationComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'contact', component: ContactComponent}
];
