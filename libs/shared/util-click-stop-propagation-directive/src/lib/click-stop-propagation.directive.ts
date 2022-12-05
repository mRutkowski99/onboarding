import { Directive, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[clickStopPropagation]',
})
export class ClickStopPropagationDirective {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
