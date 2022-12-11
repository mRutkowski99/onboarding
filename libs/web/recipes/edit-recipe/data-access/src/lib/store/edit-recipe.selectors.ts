import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EditRecipeState,
  EDIT_RECIPE_FEATURE_KEY,
} from './edit-recipe.reducer';

export class EditRecipeSelectors {
  private static featureSelector = createFeatureSelector<EditRecipeState>(
    EDIT_RECIPE_FEATURE_KEY
  );

  static recipeSelector = createSelector(
    this.featureSelector,
    (state) => state.data
  );

  static statusSelector = createSelector(
    this.featureSelector,
    (state) => state.status
  );

  static errorSelector = createSelector(
    this.featureSelector,
    (state) => state.error
  );

  static formDisabledSelector = createSelector(
    this.featureSelector,
    (state) => state.formDisabled
  );
}
