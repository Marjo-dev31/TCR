import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PressComponent } from './pages/press/press.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'press', component: PressComponent}
];
