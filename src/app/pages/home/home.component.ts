import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationDirective } from '../../shared/directives/animation.directive';
import { TriggerAnimationService } from '../../../services/trigger-animation.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AnimationDirective, NgClass],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {

  public readonly triggerAnimationService = inject(TriggerAnimationService)

  triggerAnimationSignal = this.triggerAnimationService.firstTrigger

  openDefinition = signal(false);

  mediaQuery = window.matchMedia("(min-width: 768px)")

  animate() {
    this.openDefinition.update((s) => !s);

    const defElement = document.getElementById('def');
    const questionElement = document.getElementById('question');
    const definitionElement = document.getElementById('definition');

    if (this.openDefinition()) {
      definitionElement?.classList.add('rotate-180');
      definitionElement?.classList.add('duration-1000');
      questionElement?.classList.add('opacity-0');
      defElement?.classList.remove('opacity-0');
      defElement?.classList.add('animate-fadeIn1');
      if(this.mediaQuery.matches){
        definitionElement?.classList.add('-translate-x-full');
      definitionElement?.classList.add('-translate-y-1/2');
      } 
    }
    if (!this.openDefinition()) {
      definitionElement?.classList.remove('rotate-180');
      definitionElement?.classList.remove('-translate-y-1/2');
      definitionElement?.classList.remove('-translate-x-full');
      questionElement?.classList.remove('opacity-0');
      defElement?.classList.add('opacity-0');
      defElement?.classList.remove('animate-fadeIn1');
    }
  }

  ngAfterViewInit(): void {
    console.log('toto', this.triggerAnimationSignal())

    setTimeout(()=>{
      this.triggerAnimationService.setFirstTrigger()
    },4000)
  }
}
