import { Directive, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[appAnimation]',
  standalone: true
})
export class AnimationDirective {

  constructor() { }

  // @HostListener('click', ['$event'])

  // openDefinition = signal(false);

  // onCLick($event: MouseEvent) {
  //   console.log('toto')
  //   this.openDefinition.update((s) => !s);

    // const defElement = document.getElementById('def');
    // const questionElement = document.getElementById('question');
    // const definitionElement = document.getElementById('definition');

    // if (this.openDefinition()) {
    //   definitionElement?.classList.add('rotate-180');
    //   definitionElement?.classList.add('-translate-x-full');
    //   questionElement?.classList.add('opacity-0');
    //   defElement?.classList.remove('opacity-0');
    //   defElement?.classList.add('animate-fadeIn1');
    // }
    // if (!this.openDefinition()) {
    //   definitionElement?.classList.remove('rotate-180');
    //   definitionElement?.classList.remove('-translate-x-full');
    //   questionElement?.classList.remove('opacity-0');
    //   defElement?.classList.add('opacity-0');
    //   defElement?.classList.remove('animate-fadeIn1');
    // }
  // }
}
