import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRecipesRecipeFormUiComponent } from '@onboarding/web/recipes/recipe-form/ui';
import { SharedUiIngredientChipComponent } from '@onboarding/shared/ui-ingredient-chip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'onboarding-feature-recipe-form',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesRecipeFormUiComponent,
    SharedUiIngredientChipComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './web-recipes-recipe-form-feature.component.html',
  styleUrls: ['./web-recipes-recipe-form-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipeFormFeatureComponent {
  ingredients = [
    { _id: '1', name: 'Ingredient 1', quantity: '500g' },
    { _id: '2', name: 'Ingredient 2', quantity: '500g' },
  ];
}
