import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRecipeDetails } from './ui-recipe-details.interface';

@Component({
  selector: 'onboarding-ui-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-recipe-details.component.html',
  styleUrls: ['./shared-ui-recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiRecipeDetailsComponent {
  @Input() recipe: UiRecipeDetails | undefined;
}
