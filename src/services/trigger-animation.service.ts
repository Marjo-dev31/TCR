import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriggerAnimationService {

  firstTrigger= signal(true)

  setFirstTrigger() {
    this.firstTrigger.set(false)
  }
}
