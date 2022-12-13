import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'onboarding-web-recipes-ui-not-selected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-recipes-ui-not-selected.component.html',
  styleUrls: ['./web-recipes-ui-not-selected.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesUiNotSelectedComponent {}
