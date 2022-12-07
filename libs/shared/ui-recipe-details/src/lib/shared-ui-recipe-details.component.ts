import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRecipeDetails } from './ui-recipe-details.interface';
import { PreparationTimePipe } from '@onboarding/shared/util-preparation-time-pipe';

@Component({
  selector: 'onboarding-ui-recipe-details',
  standalone: true,
  imports: [CommonModule, PreparationTimePipe],
  templateUrl: './shared-ui-recipe-details.component.html',
  styleUrls: ['./shared-ui-recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiRecipeDetailsComponent {
  @Input() recipe: UiRecipeDetails | null | undefined;
}
