import { Component, effect, HostBinding, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToggleDarkModeService } from '../services/toggle-dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(){
    effect(()=> { this.toggleDarkModeService.isDarkMode()})
  }
  title = 'tcr-app';
  
  toggleDarkModeService = inject(ToggleDarkModeService)

  @HostBinding('class.dark') get mode(){
    return this.toggleDarkModeService.isDarkMode()
  }
}
