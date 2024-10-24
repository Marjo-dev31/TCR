import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompetitionNavbarComponent } from './navbar/competition-navbar.component';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [RouterOutlet, CompetitionNavbarComponent],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {

}
