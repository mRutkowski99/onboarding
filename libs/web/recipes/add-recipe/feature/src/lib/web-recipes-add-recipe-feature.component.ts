import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRecipesRecipeFormFeatureComponent } from '@onboarding/web/recipes/recipe-form/feature';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';

@Component({
  selector: 'onboarding-web-recipes-add-recipe-feature',
  standalone: true,
  imports: [CommonModule, WebRecipesRecipeFormFeatureComponent],
  templateUrl: './web-recipes-add-recipe-feature.component.html',
  styleUrls: ['./web-recipes-add-recipe-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesAddRecipeFeatureComponent {
  onSaveRecipe(recipe: CreateUpdateRecipePayload) {
    //
  }
}
