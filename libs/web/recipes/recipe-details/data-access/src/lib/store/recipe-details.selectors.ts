import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RecipeDetailsState,
  RECIPE_DETAILS_FEATURE_KEY,
} from './recipe-details.reducer';

export class RecipeDetailsSelectors {
  private static featureSelector = createFeatureSelector<RecipeDetailsState>(
    RECIPE_DETAILS_FEATURE_KEY
  );

  static recipeDetailsSelector = createSelector(
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
}
