import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddRecipeState, ADD_RECIPE_FEATURE_NAME } from './add-recipe.reducer';

export class AddRecipeSelectors {
  private static featureSelector = createFeatureSelector<AddRecipeState>(
    ADD_RECIPE_FEATURE_NAME
  );

  static formDisabledSelector = createSelector(
    this.featureSelector,
    (state) => state.formDisabled
  );
}
