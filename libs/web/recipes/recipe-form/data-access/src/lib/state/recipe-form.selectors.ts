import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RecipeFormState,
  RECIPE_FORM_FEATURE_NAME,
} from './recipe-form.reducer';

export class RecipeFormSelectors {
  private static featureSelector = createFeatureSelector<RecipeFormState>(
    RECIPE_FORM_FEATURE_NAME
  );

  static recipeInitialValueSelector = createSelector(
    this.featureSelector,
    (state) => state.recipeInitialValue
  );

  static ingredientsSelector = createSelector(
    this.featureSelector,
    (state) => state.ingredients
  );

  static hasIngredientsBeenModifiedSelector = createSelector(
    this.featureSelector,
    (state) => state.hasIngredientsBeenModified
  );
}
