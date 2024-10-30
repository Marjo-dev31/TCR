import { HostBinding, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleDarkModeService {

  isDarkMode = signal(true);

  modeChange() {
    this.isDarkMode.update((s) => (s = !s));
  }

  @HostBinding('class.dark') get mode(){
    return this.isDarkMode()
  }

}