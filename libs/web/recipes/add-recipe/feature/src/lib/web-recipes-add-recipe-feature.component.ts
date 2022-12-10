import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRecipesRecipeFormFeatureComponent } from '@onboarding/web/recipes/recipe-form/feature';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import {
  AddRecipeStoreFacade,
  WebRecipesAddRecipeDataAccessModule,
} from '@onboarding/web/recipes/add-recipe/data-access';

@Component({
  selector: 'onboarding-web-recipes-add-recipe-feature',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesAddRecipeDataAccessModule,
    WebRecipesRecipeFormFeatureComponent,
  ],
  templateUrl: './web-recipes-add-recipe-feature.component.html',
  styleUrls: ['./web-recipes-add-recipe-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesAddRecipeFeatureComponent {
  constructor(private store: AddRecipeStoreFacade) {}

  formDisabled$ = this.store.formDisabled$;

  onSaveRecipe(recipe: CreateUpdateRecipePayload) {
    this.store.createRecipe(recipe);
  }
}
