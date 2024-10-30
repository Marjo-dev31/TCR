import { Component, HostBinding, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleDarkModeService } from '../../../services/toggle-dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  toggleDarkModeService = inject(ToggleDarkModeService)

  modeChange(){
    this.toggleDarkModeService.modeChange()
  }

  // isDarkMode = signal(true);

  // modeChange() {
  //   this.isDarkMode.update((s) => (s = !s));
  // }

  // @HostBinding('class.dark') get mode(){
  //   console.log(this.isDarkMode(), 'tot2')
  //   return this.isDarkMode()
  // }


}
