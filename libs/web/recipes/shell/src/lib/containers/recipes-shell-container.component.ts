import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'onboarding-recipes-shell-container',
  templateUrl: './recipes-shell-container.component.html',
  styleUrls: ['./recipes-shell-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesShellContainerComponent {}
