import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRecipesRecipeFormUiComponent } from '@onboarding/web/recipes/recipe-form/ui';

@Component({
  selector: 'onboarding-feature-recipe-form',
  standalone: true,
  imports: [CommonModule, WebRecipesRecipeFormUiComponent],
  templateUrl: './web-recipes-recipe-form-feature.component.html',
  styleUrls: ['./web-recipes-recipe-form-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipeFormFeatureComponent {}
