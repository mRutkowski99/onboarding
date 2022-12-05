import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'onboarding-web-shell-container',
  templateUrl: './web-shell-container.component.html',
  styleUrls: ['./web-shell-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebShellContainerComponent {}
